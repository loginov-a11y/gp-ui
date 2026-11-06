/**
 * HTTP-код из ошибки ofetch / H3 / тела BFF.
 * `undefined` — это не ответ сервера, а обрыв сети.
 */
export function readErrorStatus(error: unknown): number | undefined {
  if (!error || typeof error !== 'object') return undefined

  const e = error as {
    status?: unknown
    statusCode?: unknown
    response?: { status?: unknown }
    data?: { status?: unknown; statusCode?: unknown }
  }
  const nested = e.data && typeof e.data === 'object' ? (e.data.status ?? e.data.statusCode) : undefined
  const status = e.status ?? e.statusCode ?? e.response?.status ?? nested

  return typeof status === 'number' && status > 0 ? status : undefined
}

/** Сообщение ofetch: `[POST] "/api/...": <no response> Failed to fetch`. */
const OFETCH_PREFIX_RE = /^\[[A-Z]+\]\s+"/

const NETWORK_FAILURE_RE =
  /failed to fetch|fetch failed|<no response>|networkerror|network request failed|load failed|econnrefused|enotfound|etimedout|econnreset|und_err_|socket hang up|connect timeout|the internet connection appears to be offline/i

/** Служебный текст сети/ofetch — его нельзя показывать мерчанту. */
export function isTechnicalErrorText(value: string): boolean {
  const text = value.trim()
  if (!text) return false
  return OFETCH_PREFIX_RE.test(text) || NETWORK_FAILURE_RE.test(text)
}

function pushText(target: string[], value: unknown) {
  if (typeof value === 'string' && value.trim()) target.push(value)
}

function collectErrorTexts(error: unknown, depth = 0): string[] {
  if (!error || depth > 3) return []
  if (typeof error === 'string') return error.trim() ? [error] : []
  if (typeof error !== 'object') return []

  const e = error as Record<string, unknown>
  const texts: string[] = []
  pushText(texts, e.message)
  pushText(texts, e.statusMessage)
  pushText(texts, e.statusText)
  texts.push(...collectErrorTexts(e.data, depth + 1))
  texts.push(...collectErrorTexts(e.cause, depth + 1))
  return texts
}

/**
 * Сервер не ответил: обрыв сети, таймаут, 502/503/504.
 * Шаблон `[POST] "/url": 401` — это обычный ответ ofetch, его сюда не кладём.
 */
export function isUnavailableRequestError(error: unknown): boolean {
  const status = readErrorStatus(error)
  if (status === 502 || status === 503 || status === 504) return true
  if (collectErrorTexts(error).some((text) => NETWORK_FAILURE_RE.test(text))) return true

  if (status !== undefined) return false

  const name = error && typeof error === 'object' ? (error as { name?: unknown }).name : undefined
  return name === 'FetchError' || name === 'TypeError'
}

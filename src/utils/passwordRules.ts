export type PasswordRuleKey = 'minLength' | 'lowercase' | 'uppercase' | 'number' | 'special'

export type PasswordRuleChecks = Record<PasswordRuleKey, boolean>

const LABEL_KEYS: Record<PasswordRuleKey, string> = {
  minLength: 'auth.passwordRequirement.minLength',
  lowercase: 'auth.passwordRequirement.lowercase',
  uppercase: 'auth.passwordRequirement.uppercase',
  number: 'auth.passwordRequirement.number',
  special: 'auth.passwordRequirement.specialChar'
}

const RULE_KEYS = Object.keys(LABEL_KEYS) as PasswordRuleKey[]

export function getPasswordRuleChecks(password: string): PasswordRuleChecks {
  return {
    minLength: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*]/.test(password)
  }
}

export function getPasswordRuleItems(password: string) {
  const checks = getPasswordRuleChecks(password)
  return RULE_KEYS.map((key) => ({
    key,
    met: checks[key],
    labelKey: LABEL_KEYS[key]
  }))
}

export function isPasswordStrong(password: string): boolean {
  return Object.values(getPasswordRuleChecks(password)).every(Boolean)
}

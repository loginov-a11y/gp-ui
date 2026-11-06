/** Сообщения пакета (ru). Потребитель мёрджит в свои messages i18n. */
export default {
  auth: {
    passwordRequirement: {
      lowercase: "Строчная буква (a-z)",
      minLength: "Минимум 8 символов",
      number: "Цифра (0-9)",
      specialChar: "Специальный символ",
      uppercase: "Заглавная буква (A-Z)"
    },
    passwordRequirementsTitle: "Требования к паролю:",
    passwordStrength: {
      medium: "Средний",
      strong: "Надежный",
      weak: "Слабый"
    },
    passwordStrengthLabel: "Надежность пароля"
  },
  balance: {
    qr: {
      generating: "Генерация QR-кода...",
      generationError: "Ошибка генерации QR-кода",
      retry: "Повторить"
    }
  },
  common: {
    back: "Назад",
    brand: "Good Payments",
    clear: "Очистить",
    close: "Закрыть",
    copied: "Скопировано",
    copiedDesc: "Текст скопирован в буфер обмена",
    copy: "Копировать",
    date: "Дата",
    error: "Ошибка",
    language: "Язык",
    languageSwitchError: "Не удалось переключить язык",
    next: "Далее",
    nextMonth: "Следующий месяц",
    nothingFound: "Ничего не найдено",
    openList: "Открыть список",
    previousMonth: "Предыдущий месяц",
    save: "Сохранить",
    showRange: "Показано {from}-{to} из {total}",
    weekdays: {
      fri: "пт",
      mon: "пн",
      sat: "сб",
      sun: "вс",
      thu: "чт",
      tue: "вт",
      wed: "ср"
    }
  },
  invoices: {
    resolution: {
      underpaidHint: "Оплата меньше суммы инвойса. Зачислите полученную сумму на баланс либо обратитесь в поддержку для возврата средств плательщику."
    }
  },
  terminal: {
    auth: {
      fieldRequired: "Это поле обязательно",
      hidePassword: "Скрыть пароль",
      invalidEmail: "Введите корректный email адрес",
      showPassword: "Показать пароль"
    },
    errors: {
      RATE_LIMITED_IN: "Слишком много попыток. Повторите через {seconds} с",
      REQUEST_FAILED: "Ошибка запроса. Попробуйте повторить позже"
    },
    invoices: {
      create: {
        amountTooLarge: "Сумма не может быть больше {max}"
      }
    },
    nav: {
      availableForWithdraw: "Доступно для вывода:",
      docs: "Документация",
      logout: "Выход",
      menu: "Меню",
      openMenu: "Открыть меню",
      support: "Поддержка",
      welcome: "Добро пожаловать!"
    }
  }
}

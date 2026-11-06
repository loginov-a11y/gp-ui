/** Сообщения пакета (en). Потребитель мёрджит в свои messages i18n. */
export default {
  auth: {
    passwordRequirement: {
      lowercase: "Lowercase letter (a-z)",
      minLength: "At least 8 characters",
      number: "Number (0-9)",
      specialChar: "Special character",
      uppercase: "Uppercase letter (A-Z)"
    },
    passwordRequirementsTitle: "Password requirements:",
    passwordStrength: {
      medium: "Medium",
      strong: "Strong",
      weak: "Weak"
    },
    passwordStrengthLabel: "Password strength"
  },
  balance: {
    qr: {
      generating: "Generating QR code...",
      generationError: "QR code generation error",
      retry: "Retry"
    }
  },
  common: {
    back: "Back",
    brand: "Good Payments",
    clear: "Clear",
    close: "Close",
    copied: "Copied",
    copiedDesc: "Text copied to clipboard",
    copy: "Copy",
    date: "Date",
    error: "Error",
    language: "Language",
    languageSwitchError: "Failed to switch language",
    next: "Next",
    nextMonth: "Next month",
    nothingFound: "Nothing found",
    openList: "Open list",
    previousMonth: "Previous month",
    save: "Save",
    showRange: "Showing {from}-{to} of {total}",
    weekdays: {
      fri: "Fri",
      mon: "Mon",
      sat: "Sat",
      sun: "Sun",
      thu: "Thu",
      tue: "Tue",
      wed: "Wed"
    }
  },
  invoices: {
    resolution: {
      underpaidHint: "The payment is less than the invoice amount. Credit the amount received to the balance or contact support to refund the payer."
    }
  },
  terminal: {
    auth: {
      fieldRequired: "This field is required",
      hidePassword: "Hide password",
      invalidEmail: "Enter a valid email address",
      showPassword: "Show password"
    },
    errors: {
      RATE_LIMITED_IN: "Too many attempts. Try again in {seconds}s",
      REQUEST_FAILED: "Request error. Please try again later"
    },
    invoices: {
      create: {
        amountTooLarge: "Amount cannot be greater than {max}"
      }
    },
    nav: {
      availableForWithdraw: "Available for withdrawal:",
      docs: "Documentation",
      logout: "Log out",
      menu: "Menu",
      openMenu: "Open menu",
      support: "Support",
      welcome: "Welcome!"
    }
  }
}

/**
 * Длина TOTP / OTP-кода подтверждения (2FA, смена пароля, вход).
 */
export const OTP_CODE_LENGTH = 6

/** Placeholder маски `000-000` (6 цифр + дефис). */
export const OTP_CODE_PLACEHOLDER = '000-000'

/** maxlength для инпута с маской `000-000`. */
export const OTP_CODE_INPUT_MAX_LENGTH = OTP_CODE_LENGTH + 1

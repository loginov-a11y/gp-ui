export declare const EMAIL_RE: RegExp;
/** Сообщение для поля email: пустое, невалидное или пустая строка если всё ок. */
export declare function emailFieldError(value: string, t: (key: string) => string): string;

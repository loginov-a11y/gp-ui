/** Сообщения пакета (en). Потребитель мёрджит в свои messages i18n. */
declare const _default: {
    auth: {
        passwordRequirement: {
            lowercase: string;
            minLength: string;
            number: string;
            specialChar: string;
            uppercase: string;
        };
        passwordRequirementsTitle: string;
        passwordStrength: {
            medium: string;
            strong: string;
            weak: string;
        };
        passwordStrengthLabel: string;
    };
    balance: {
        qr: {
            generating: string;
            generationError: string;
            retry: string;
        };
    };
    common: {
        back: string;
        brand: string;
        clear: string;
        close: string;
        copied: string;
        copiedDesc: string;
        copy: string;
        date: string;
        error: string;
        language: string;
        languageSwitchError: string;
        next: string;
        nextMonth: string;
        nothingFound: string;
        openList: string;
        previousMonth: string;
        save: string;
        showRange: string;
        weekdays: {
            fri: string;
            mon: string;
            sat: string;
            sun: string;
            thu: string;
            tue: string;
            wed: string;
        };
    };
    invoices: {
        resolution: {
            underpaidHint: string;
        };
    };
    terminal: {
        auth: {
            fieldRequired: string;
            hidePassword: string;
            invalidEmail: string;
            showPassword: string;
        };
        errors: {
            RATE_LIMITED_IN: string;
            REQUEST_FAILED: string;
        };
        invoices: {
            create: {
                amountTooLarge: string;
            };
        };
        nav: {
            availableForWithdraw: string;
            docs: string;
            logout: string;
            menu: string;
            openMenu: string;
            support: string;
            welcome: string;
        };
    };
};
export default _default;

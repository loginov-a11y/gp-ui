/**
 * Форматирование денежных сумм.
 *
 * Раньше эти функции жили внутри крипто-стора баланса и тянулись компонентами
 * вместе со всем стором. В терминальном контуре крипто-баланса нет, а
 * форматирование нужно везде — поэтому вынесено отдельно и не знает про валюту
 * ничего, кроме её кода.
 */
export declare const useAmountFormat: () => {
    formatCurrency: (amount: number, currency?: string) => string;
    formatAmount: (value: number | string | null | undefined, currency?: string, fallback?: string) => string;
};

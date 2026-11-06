/**
 * Статус с иконкой — макеты status invoice / payment / balance.
 * Только текст и цвет, без pill-фона.
 */
export type GStatusBadgeDomain = 'invoice' | 'payment' | 'balance';
export type GInvoiceStatus = 'ACTIVE' | 'COMPLETED' | 'CREATED' | 'OVERPAID' | 'UNDERPAID' | 'CANCELED' | 'TIMEOUT' | 'VOID' | 'ERROR' | 'AML_FAILED';
export type GPaymentStatus = 'ACTIVE' | 'TIMEOUT';
export type GBalanceStatus = 'created' | 'paid' | 'rejected';
type GStatusBadgeStatus = GInvoiceStatus | GPaymentStatus | GBalanceStatus;
interface Props {
    domain: GStatusBadgeDomain;
    status: GStatusBadgeStatus;
    label?: string;
    /** Вторая строка под статусом — исход недоплаты. */
    info?: string;
    /** Цвет второй строки: зачислено / возврат / списан / ожидает. Без значения — акцентный. */
    infoTone?: 'green' | 'black' | 'amber' | 'red' | 'gray' | 'blue' | 'orange' | 'danger';
    /** Иконка у второй строки по макету статуса. */
    infoIcon?: 'credit' | 'refund' | 'writtenOff' | 'awaiting';
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;

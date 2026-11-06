/**
 * Цифровой OTP с отображением `000-000`; в `code` — только цифры для API.
 */
export declare function useOtpCodeInput(length?: number): {
    code: import("vue").Ref<string, string>;
    display: import("vue").WritableComputedRef<string, string>;
    isComplete: import("vue").ComputedRef<boolean>;
    submitVariant: import("vue").ComputedRef<"primary" | "secondary">;
    reset: () => void;
    length: number;
    maxlength: number;
    placeholder: string;
};

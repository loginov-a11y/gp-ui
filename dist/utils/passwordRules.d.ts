export type PasswordRuleKey = 'minLength' | 'lowercase' | 'uppercase' | 'number' | 'special';
export type PasswordRuleChecks = Record<PasswordRuleKey, boolean>;
export declare function getPasswordRuleChecks(password: string): PasswordRuleChecks;
export declare function getPasswordRuleItems(password: string): {
    key: PasswordRuleKey;
    met: boolean;
    labelKey: string;
}[];
export declare function isPasswordStrong(password: string): boolean;

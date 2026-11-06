import type { PageAction } from '../types/ui';
import type { GButtonVariant } from '../ui-kit/GButton.vue';
export declare function pageActionToGButtonVariant(variant?: PageAction['variant']): Exclude<GButtonVariant, 'gray' | 'dark' | 'white'>;
export declare function pageActionLoading(loading: PageAction['loading']): boolean;
export declare function pageActionDisabled(disabled: PageAction['disabled']): boolean;
export declare function pageActionLabel(action: PageAction, t: (key: string) => string): string;

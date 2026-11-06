import { type MaybeRef } from 'vue';
import type { PageAction } from '../types/ui';
interface PageHeaderState {
    title: string;
    subtitle?: string;
    actions: PageAction[];
}
export declare const usePageHeader: () => {
    state: import("vue").ComputedRef<PageHeaderState>;
    setTitle: (value: MaybeRef<string>) => void;
    setSubtitle: (value?: MaybeRef<string | undefined>) => void;
    setActions: (value: PageAction[]) => void;
    addAction: (action: PageAction) => void;
    removeAction: (key: string) => void;
    clearTitleSubtitle: () => void;
    clear: () => void;
};
export {};

import React from 'react';
declare const defaultCategoryMenuStyles: {
    title: string;
    item: string;
    itemActive: string;
};
export declare const useCtxStyles: () => Partial<{
    title: string;
    item: string;
    itemActive: string;
}>;
export declare const useCategoryItemStyles: () => {
    active: string;
    title?: string;
    item?: string;
    itemActive?: string;
};
declare type StylesProviderProps = React.PropsWithChildren<{
    styles: Partial<typeof defaultCategoryMenuStyles>;
}>;
export declare function StylesProvider({ styles, children }: StylesProviderProps): JSX.Element;
export {};

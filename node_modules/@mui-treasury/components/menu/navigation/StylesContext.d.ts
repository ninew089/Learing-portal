import React from 'react';
declare const defaultNavMenuStyles: {
    menu: string;
    item: string;
    itemActive: string;
};
export declare const useCtxStyles: () => Partial<{
    menu: string;
    item: string;
    itemActive: string;
}>;
export declare const useNavItemStyles: () => {
    active: string;
    menu?: string;
    item?: string;
    itemActive?: string;
};
declare type StylesProviderProps = React.PropsWithChildren<{
    styles: Partial<typeof defaultNavMenuStyles>;
}>;
export declare function StylesProvider({ styles, children }: StylesProviderProps): JSX.Element;
export {};

import React from 'react';
declare const defaultSocialLinkStyles: {
    anchor: string;
    icon: string;
};
export declare const useCtxStyles: () => Partial<{
    anchor: string;
    icon: string;
}>;
declare type StylesProviderProps = React.PropsWithChildren<{
    styles: Partial<typeof defaultSocialLinkStyles>;
}>;
export declare function StylesProvider({ styles, children }: StylesProviderProps): JSX.Element;
export {};

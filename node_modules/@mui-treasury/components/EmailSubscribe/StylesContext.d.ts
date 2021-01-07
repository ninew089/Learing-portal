import React from 'react';
declare const defaultEmailSubscribeStyles: {
    form: string;
    input: string;
    submit: string;
};
export declare const useCtxStyles: () => Partial<{
    form: string;
    input: string;
    submit: string;
}>;
declare type StylesProviderProps = React.PropsWithChildren<{
    styles: Partial<typeof defaultEmailSubscribeStyles>;
}>;
export declare function StylesProvider({ styles, children }: StylesProviderProps): JSX.Element;
export declare const StylesConsumer: React.Consumer<Partial<{
    form: string;
    input: string;
    submit: string;
}>>;
export {};

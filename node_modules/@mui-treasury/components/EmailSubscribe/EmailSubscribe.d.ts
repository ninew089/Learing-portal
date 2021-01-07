import React from 'react';
import { useDefaultStyles } from './defaultStyles';
export declare type EmailSubscribeProps = {
    onSubmit: (email: string) => void;
    useStyles?: typeof useDefaultStyles;
    inputClearedAfterSubmit?: boolean;
} & JSX.IntrinsicElements['form'];
export declare function EmailSubscribe({ onSubmit, children, className, useStyles, inputClearedAfterSubmit, ...props }: React.PropsWithChildren<EmailSubscribeProps>): JSX.Element;

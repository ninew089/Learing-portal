import React from 'react';
import { useDefaultStyles } from './defaultStyles';
import { SocialLinkProps } from './SocialLink';
declare type DataProps = {
    data: SocialLinkProps[];
};
declare type ChildrenProps = {
    children: React.ReactElement;
};
export declare type SocialProviderProps<T> = {
    useStyles?: typeof useDefaultStyles;
} & (DataProps | ChildrenProps);
export declare function SocialProvider<T>({ useStyles, ...props }: SocialProviderProps<T>): JSX.Element;
export {};

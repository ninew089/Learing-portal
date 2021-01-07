import React from 'react';
import { ItemProps } from './Item';
import { Gap } from './core';
export declare type RowProps = ItemProps & {
    gap?: Gap;
    wrap?: boolean;
    children: React.ReactNode;
};
declare const Row: ({ className, children, gap, wrap, ...props }: RowProps) => JSX.Element;
export default Row;

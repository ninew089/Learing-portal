import React from 'react';
import { ItemProps } from './Item';
import { Gap } from './core';
export declare type ColumnProps = ItemProps & {
    gap?: Gap;
    children: React.ReactNode;
};
declare const Column: ({ className, children, gap, ...props }: ColumnProps) => JSX.Element;
export default Column;

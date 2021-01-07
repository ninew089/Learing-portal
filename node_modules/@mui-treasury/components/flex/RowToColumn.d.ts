import React from 'react';
import * as CSS from 'csstype';
import { At, Gap } from './core';
import { ItemProps } from './Item';
export declare type RowToColumnProps = ItemProps & {
    rowStyle?: CSS.Properties;
    columnStyle?: CSS.Properties;
    at?: At;
    gap?: Gap;
    columnReversed?: boolean;
    children: React.ReactNode | React.ReactElement | React.ReactElement[];
};
declare const RowToColumn: ({ className, children, gap, at, columnReversed, columnStyle, rowStyle, ...props }: RowToColumnProps) => JSX.Element;
export default RowToColumn;

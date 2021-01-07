import React from 'react';
import * as CSS from 'csstype';
import { At, Gap } from './core';
import { ItemProps } from './Item';
export declare type ColumnToRowProps = ItemProps & {
    columnStyle?: CSS.Properties;
    rowStyle?: CSS.Properties;
    at?: At;
    gap?: Gap;
    rowReversed?: boolean;
    children: React.ReactNode | React.ReactElement | React.ReactElement[];
};
declare const ColumnToRow: ({ className, children, gap, at, columnStyle, rowStyle, rowReversed, ...props }: ColumnToRowProps) => JSX.Element;
export default ColumnToRow;

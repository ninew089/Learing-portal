import React from 'react';
import { useDefaultStyles } from './defaultStyles';
declare type NavMenuProps = {
    gutter?: string | number;
    direction?: 'row' | 'column';
    useStyles?: typeof useDefaultStyles;
};
declare function NavMenu({ children, gutter, useStyles, className, ...props }: React.PropsWithChildren<NavMenuProps & JSX.IntrinsicElements['div']>): JSX.Element;
export default NavMenu;

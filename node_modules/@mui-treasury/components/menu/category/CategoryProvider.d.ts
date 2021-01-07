import React from 'react';
import { useDefaultStyles } from './defaultStyles';
declare function CategoryProvider({ children, useStyles, }: React.PropsWithChildren<{
    useStyles: typeof useDefaultStyles;
}>): JSX.Element;
export default CategoryProvider;

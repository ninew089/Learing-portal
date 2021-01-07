export declare type RowGutterStyleProps = {
    before?: string | number;
    after?: string | number;
    size?: string | number;
};
export declare type RowGutterClassKey = keyof ReturnType<typeof rowGutterStyles>;
declare const rowGutterStyles: () => {
    parent: ({ before, after, size }: RowGutterStyleProps) => {
        '& > *:not(:first-child)': {
            marginLeft: string | number;
        };
        '& > *:first-child': {
            marginLeft: string | number;
        };
        '& > *:last-child': {
            marginRight: string | number;
        };
    };
    adjacent: ({ before, after, size }: RowGutterStyleProps) => {
        marginLeft: string | number;
        marginRight: string | number;
        '& + *': {
            marginLeft: string | number;
        };
    };
};
export default rowGutterStyles;

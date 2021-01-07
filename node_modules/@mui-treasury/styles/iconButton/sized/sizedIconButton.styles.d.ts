export declare type SizedIconButtonStyleProps = {
    padding?: string | number;
    color?: string;
    childSize?: string | number;
    radius?: string | number;
};
export declare type SizedIconButtonClassKey = keyof ReturnType<typeof sizedIconButtonStyles>;
declare const sizedIconButtonStyles: () => {
    root: ({ padding, color, radius }: SizedIconButtonStyleProps) => {
        color: string;
        padding: string | number;
        borderRadius: string | number;
        '&:hover': {
            backgroundColor: string;
        };
    };
    label: ({ childSize }: SizedIconButtonStyleProps) => {
        '& > *': {
            fontSize: string | number;
            width: string | number;
            height: string | number;
        };
    };
};
export default sizedIconButtonStyles;

export declare type GrabIconStyleProps = {
    activeColor?: string;
};
export declare type GrabIconClassKey = keyof ReturnType<typeof grabIconStyles>;
declare const grabIconStyles: () => {
    root: ({ activeColor }: GrabIconStyleProps) => {
        cursor: string;
        '&:active': {
            cursor: string;
            color: string;
        };
    };
};
export default grabIconStyles;

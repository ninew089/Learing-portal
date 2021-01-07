export declare type BeatsInfoClassKey = keyof ReturnType<typeof beatsInfoStyles>;
declare const beatsInfoStyles: () => {
    title: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    subtitle: {
        fontFamily: string;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    caption: {
        fontFamily: string;
        color: string;
        fontSize: string;
        lineHeight: number;
        '&:last-child': {
            marginTop: string;
        };
    };
};
export default beatsInfoStyles;

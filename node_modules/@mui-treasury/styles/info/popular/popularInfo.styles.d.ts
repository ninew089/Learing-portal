export declare type PopularInfoClassKey = keyof ReturnType<typeof popularInfoStyles>;
declare const popularInfoStyles: () => {
    title: {
        fontFamily: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: "bold";
    };
    subtitle: {
        fontFamily: string;
        color: string;
        fontSize: string;
        textTransform: "uppercase";
        lineHeight: number;
        letterSpacing: string;
        marginBottom: string;
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
export default popularInfoStyles;

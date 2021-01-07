export declare type GalaxyInfoClassKey = keyof ReturnType<typeof galaxyInfoStyles>;
declare const galaxyInfoStyles: () => {
    title: {
        fontFamily: string;
        color: string;
        fontSize: string;
        fontWeight: "bold";
        lineHeight: number;
    };
    subtitle: {
        fontFamily: string;
        color: string;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
        fontWeight: number;
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
export default galaxyInfoStyles;

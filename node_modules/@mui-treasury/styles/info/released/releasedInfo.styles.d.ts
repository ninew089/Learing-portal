export declare type ReleasedInfoClassKey = keyof ReturnType<typeof releasedInfoStyles>;
declare const releasedInfoStyles: () => {
    title: {
        fontFamily: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
    };
    subtitle: {
        fontFamily: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
    };
};
export default releasedInfoStyles;

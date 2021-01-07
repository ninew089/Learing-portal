export declare type TutorInfoClassKey = keyof ReturnType<typeof tutorInfoStyles>;
declare const tutorInfoStyles: () => {
    title: {
        fontFamily: string;
        color: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
        marginBottom: string;
    };
    subtitle: {
        fontFamily: string;
        color: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
    };
};
export default tutorInfoStyles;

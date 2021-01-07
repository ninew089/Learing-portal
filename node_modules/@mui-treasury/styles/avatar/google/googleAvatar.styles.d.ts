export declare type GoogleAvatarStyleProps = {
    ringSize?: number | string;
    avatarSize?: number | string;
};
export declare type GoogleAvatarClassKey = keyof ReturnType<typeof googleAvatarStyles>;
declare const googleAvatarStyles: () => {
    root: ({ ringSize, avatarSize }: {
        ringSize?: number;
        avatarSize?: number;
    }) => {
        position: "relative";
        display: string;
        '& > *': {
            width: number;
            height: number;
        };
        '&:before': {
            width: number;
            height: number;
            top: string;
            left: string;
            transform: string;
            content: string;
            display: string;
            position: "absolute";
            backgroundSize: number;
            backgroundImage: string;
            backgroundRepeat: string;
        };
    };
};
export default googleAvatarStyles;

export declare type OnlineAvatarStyleProps = {
    color?: string;
    size?: number;
    thickness?: number;
    gap?: number;
};
export declare type OnlineAvatarClassKey = keyof ReturnType<typeof onlineAvatarStyles>;
declare const onlineAvatarStyles: () => {
    root: ({ color, size, thickness, gap, }: OnlineAvatarStyleProps) => {
        position: "relative";
        display: string;
        '& > *': {
            width: number;
            height: number;
        };
        '&:before': {
            content: string;
            display: string;
            position: "absolute";
            width: number;
            height: number;
            left: string;
            top: string;
            borderRadius: string;
            transform: string;
            border: string;
            borderColor: string;
        };
    };
};
export default onlineAvatarStyles;

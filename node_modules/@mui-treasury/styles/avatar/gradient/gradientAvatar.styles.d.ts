export declare type GradientAvatarStyleProps = {
    size?: number;
    color?: string;
    thickness?: number;
    gap?: number;
    gapColor?: string;
};
export declare type GradientAvatarClassKey = keyof ReturnType<typeof gradientAvatarStyles>;
declare const gradientAvatarStyles: () => {
    root: ({ color, size, gap, gapColor, thickness, }: GradientAvatarStyleProps) => {
        position: "relative";
        display: string;
        zIndex: number;
        '& > *': {
            width: number;
            height: number;
            border: string;
            borderColor: string;
        };
        '&:before': {
            content: string;
            display: string;
            position: "absolute";
            borderRadius: string;
            zIndex: number;
            top: number;
            left: number;
            bottom: number;
            right: number;
            margin: number;
            background: string;
        };
    };
};
export default gradientAvatarStyles;

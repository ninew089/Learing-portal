export declare type DynamicAvatarStyleProps = {
    size?: number | string;
    width?: number | string;
    height?: number | string;
    radius?: number | string;
};
export declare type DynamicAvatarClassKey = keyof ReturnType<typeof dynamicAvatarStyles>;
declare const dynamicAvatarStyles: () => {
    root: ({ size, width, height, radius }: DynamicAvatarStyleProps) => {
        width: string | number;
        height: string | number;
        borderRadius: string | number;
    };
};
export default dynamicAvatarStyles;

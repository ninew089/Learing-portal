/// <reference types="react" />
import { ItemProps } from '../flex/Item';
declare type InfoStyles = Partial<Record<'title' | 'subtitle' | 'caption', string>>;
export declare const useStyleCtx: () => Partial<Record<"caption" | "title" | "subtitle", string>>;
export declare type InfoProps = {
    useStyles?: () => InfoStyles;
} & ItemProps;
declare const Info: ({ useStyles, className, children, ...props }: InfoProps) => JSX.Element;
export default Info;

/// <reference types="react" />
import { SocialIconProps } from './SocialIcon';
export declare type SocialLinkProps = {
    brand: SocialIconProps['brand'];
} & JSX.IntrinsicElements['a'];
export declare function SocialLink({ children, brand, className, ...props }: SocialLinkProps): JSX.Element;

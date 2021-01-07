import React from 'react';
import * as Icons from './icons';
export declare type SocialIconProps = {
    brand: keyof typeof Icons;
} & React.SVGProps<SVGSVGElement>;
export default function SocialIcon({ brand, ...props }: SocialIconProps): JSX.Element;

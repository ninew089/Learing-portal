import React from 'react';
declare type AnyTag = keyof JSX.IntrinsicElements | React.ComponentType<any>;
declare type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[Tag] : Tag extends React.ComponentType<infer Props> ? Props & JSX.IntrinsicAttributes : any;
declare function NavItem<T extends AnyTag = 'a'>({ as: Component, active, children, className, ...props }: React.PropsWithChildren<{
    as?: T;
    active?: boolean;
}> & PropsOf<T>): JSX.Element;
export default NavItem;

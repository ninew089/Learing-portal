import React from 'react';
declare type AnyTag = keyof JSX.IntrinsicElements | React.ComponentType<any>;
declare type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[Tag] : Tag extends React.ComponentType<infer Props> ? Props & JSX.IntrinsicAttributes : any;
declare function CategoryTitle<T extends AnyTag = 'h6'>({ as: Component, children, ...props }: React.PropsWithChildren<{
    as?: T;
}> & PropsOf<T>): JSX.Element;
export default CategoryTitle;

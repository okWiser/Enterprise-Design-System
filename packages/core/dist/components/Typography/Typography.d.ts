import React from 'react';
export interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
}
export interface TextProps {
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
}
export declare const Heading: React.FC<HeadingProps>;
export declare const Text: React.FC<TextProps>;

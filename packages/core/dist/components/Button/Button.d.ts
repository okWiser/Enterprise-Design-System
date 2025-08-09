import React from 'react';
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;

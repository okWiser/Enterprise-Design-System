import React from 'react';
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    id?: string;
    className?: string;
    'aria-label'?: string;
    role?: string;
}
export declare const Button: React.FC<ButtonProps>;

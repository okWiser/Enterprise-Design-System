import React from 'react';
export interface InputProps {
    variant?: 'outline' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: React.FC<InputProps>;

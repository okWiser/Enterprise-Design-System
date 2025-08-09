import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ChevronDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6,9 12,15 18,9" />
  </svg>
);
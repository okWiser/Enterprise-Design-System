import React from 'react';
import { IconProps } from './ChevronDown';

export const Check: React.FC<IconProps> = ({ 
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
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
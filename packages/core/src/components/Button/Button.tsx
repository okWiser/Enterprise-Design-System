import React from 'react';
import styled from 'styled-components';

// Inline tokens for now to avoid import issues
const colors = {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    900: '#0f172a',
  },
};

const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
  },
  fontWeight: {
    medium: 500,
  }
};

const spacing = {
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
};

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: ${typography.fontFamily.sans.join(', ')};
  font-weight: ${typography.fontWeight.medium};
  border-radius: ${spacing[2]};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ size = 'md' }) => {
    const sizes = {
      sm: { padding: `${spacing[2]} ${spacing[3]}`, fontSize: typography.fontSize.sm },
      md: { padding: `${spacing[3]} ${spacing[4]}`, fontSize: typography.fontSize.base },
      lg: { padding: `${spacing[4]} ${spacing[6]}`, fontSize: typography.fontSize.lg },
    };
    return `
      padding: ${sizes[size].padding};
      font-size: ${sizes[size].fontSize};
    `;
  }}

  ${({ variant = 'primary' }) => {
    const variants = {
      primary: {
        background: colors.primary[500],
        color: 'white',
        hover: colors.primary[600],
      },
      secondary: {
        background: colors.neutral[100],
        color: colors.neutral[900],
        hover: colors.neutral[200],
      },
      outline: {
        background: 'transparent',
        color: colors.primary[500],
        border: colors.primary[500],
        hover: colors.primary[50],
      },
    };
    return `
      background-color: ${variants[variant].background};
      color: ${variants[variant].color};
      ${variant === 'outline' ? `border-color: ${variants[variant].border};` : ''}
      
      &:hover:not(:disabled) {
        background-color: ${variants[variant].hover};
      }
    `;
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
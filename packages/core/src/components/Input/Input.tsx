import React from 'react';
import styled from 'styled-components';

const colors = {
  primary: { 500: '#0ea5e9' },
  neutral: { 100: '#f1f5f9', 200: '#e2e8f0', 500: '#64748b', 900: '#0f172a' },
  semantic: { error: '#ef4444' }
};

const typography = {
  fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
  fontSize: { sm: '0.875rem', base: '1rem' },
  fontWeight: { normal: 400 }
};

const spacing = { 2: '0.5rem', 3: '0.75rem', 4: '1rem' };

export interface InputProps {
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<InputProps>`
  font-family: ${typography.fontFamily.sans.join(', ')};
  font-weight: ${typography.fontWeight.normal};
  border-radius: ${spacing[2]};
  border: 1px solid;
  transition: all 0.2s ease;
  outline: none;

  ${({ size = 'md' }) => {
    const sizes = {
      sm: { padding: `${spacing[2]} ${spacing[3]}`, fontSize: typography.fontSize.sm },
      md: { padding: `${spacing[3]} ${spacing[4]}`, fontSize: typography.fontSize.base },
      lg: { padding: `${spacing[4]} ${spacing[4]}`, fontSize: typography.fontSize.base },
    };
    return `
      padding: ${sizes[size].padding};
      font-size: ${sizes[size].fontSize};
    `;
  }}

  ${({ variant = 'outline', error }) => {
    const borderColor = error ? colors.semantic.error : colors.neutral[200];
    const focusBorder = error ? colors.semantic.error : colors.primary[500];
    
    return variant === 'outline' ? `
      background-color: white;
      border-color: ${borderColor};
      
      &:focus {
        border-color: ${focusBorder};
        box-shadow: 0 0 0 3px ${focusBorder}20;
      }
    ` : `
      background-color: ${colors.neutral[100]};
      border-color: transparent;
      
      &:focus {
        background-color: white;
        border-color: ${focusBorder};
        box-shadow: 0 0 0 3px ${focusBorder}20;
      }
    `;
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${colors.neutral[100]};
  }

  &::placeholder {
    color: ${colors.neutral[500]};
  }
`;

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};
import React from 'react';
import styled from 'styled-components';

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

const StyledButton = styled.button<{ $variant: string; $size: string }>`
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  
  padding: ${props => props.$size === 'sm' ? '0.5rem 0.75rem' : props.$size === 'lg' ? '1rem 1.5rem' : '0.75rem 1rem'};
  font-size: ${props => props.$size === 'sm' ? '0.875rem' : props.$size === 'lg' ? '1.125rem' : '1rem'};
  
  background-color: ${props => 
    props.$variant === 'secondary' ? '#f1f5f9' : 
    props.$variant === 'outline' ? 'transparent' : 
    '#0ea5e9'
  };
  color: ${props => 
    props.$variant === 'secondary' ? '#0f172a' : 
    props.$variant === 'outline' ? '#0ea5e9' : 
    'white'
  };
  border-color: ${props => props.$variant === 'outline' ? '#0ea5e9' : 'transparent'};
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      props.$variant === 'secondary' ? '#e2e8f0' : 
      props.$variant === 'outline' ? '#f0f9ff' : 
      '#0284c7'
    };
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, ...props }) => {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
};
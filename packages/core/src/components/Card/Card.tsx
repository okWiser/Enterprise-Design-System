import React from 'react';
import styled from 'styled-components';

const colors = {
  neutral: { 100: '#f1f5f9', 200: '#e2e8f0', 900: '#0f172a' }
};

const typography = {
  fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
  fontSize: { lg: '1.125rem', base: '1rem' },
  fontWeight: { semibold: 600, normal: 400 }
};

const spacing = { 4: '1rem', 6: '1.5rem' };

export interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
}

const StyledCard = styled.div<CardProps>`
  background: white;
  border: 1px solid ${colors.neutral[200]};
  border-radius: ${spacing[4]};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  ${({ padding = 'md' }) => {
    const paddings = {
      sm: spacing[4],
      md: spacing[6],
      lg: '2rem',
    };
    return `padding: ${paddings[padding]};`;
  }}
`;

const CardHeader = styled.div`
  margin-bottom: ${spacing[4]};
  
  h3 {
    margin: 0;
    font-family: ${typography.fontFamily.sans.join(', ')};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.semibold};
    color: ${colors.neutral[900]};
  }
`;

const CardBody = styled.div`
  font-family: ${typography.fontFamily.sans.join(', ')};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.normal};
  color: ${colors.neutral[900]};
  line-height: 1.5;
`;

const CardFooter = styled.div`
  margin-top: ${spacing[4]};
  padding-top: ${spacing[4]};
  border-top: 1px solid ${colors.neutral[200]};
`;

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
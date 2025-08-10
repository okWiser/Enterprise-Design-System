import React from 'react';
import styled from 'styled-components';

const colors = {
  neutral: { 500: '#64748b', 900: '#0f172a' }
};

const typography = {
  fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 }
};

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

const StyledHeading = styled.h1<HeadingProps>`
  font-family: ${typography.fontFamily.sans.join(', ')};
  font-weight: ${typography.fontWeight.bold};
  margin: 0;
  line-height: 1.2;
  
  ${({ level = 1 }) => {
    const sizes = {
      1: typography.fontSize['3xl'],
      2: typography.fontSize['2xl'],
      3: typography.fontSize.xl,
      4: typography.fontSize.lg,
      5: typography.fontSize.base,
      6: typography.fontSize.sm,
    };
    return `font-size: ${sizes[level]};`;
  }}
  
  ${({ color = 'primary' }) => {
    const colors_map = {
      primary: colors.neutral[900],
      secondary: colors.neutral[500],
    };
    return `color: ${colors_map[color]};`;
  }}
`;

const StyledText = styled.p<TextProps>`
  font-family: ${typography.fontFamily.sans.join(', ')};
  margin: 0;
  line-height: 1.5;
  
  ${({ size = 'base' }) => `font-size: ${typography.fontSize[size]};`}
  
  ${({ weight = 'normal' }) => `font-weight: ${typography.fontWeight[weight]};`}
  
  ${({ color = 'primary' }) => {
    const colors_map = {
      primary: colors.neutral[900],
      secondary: colors.neutral[500],
    };
    return `color: ${colors_map[color]};`;
  }}
`;

export const Heading: React.FC<HeadingProps> = ({ level = 1, children, ...props }) => {
  return <StyledHeading as={`h${level}` as any} level={level} {...props}>{children}</StyledHeading>;
};

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
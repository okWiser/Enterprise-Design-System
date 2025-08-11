import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import React from 'react';

// Simple theme configuration to resolve the TypeError
const theme = {
  colors: {
    primary: '#0ea5e9',
    secondary: '#64748b',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    textSecondary: '#64748b',
    border: '#e2e8f0',
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      500: '#64748b',
      900: '#0f172a',
    },
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
    },
    fontWeight: {
      medium: 500,
      semibold: 600,
    },
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: undefined,
    },
  },
  decorators: [
    (Story) => {
      const StoryComponent = Story as React.ComponentType;
      return (
        <ThemeProvider theme={theme}>
          <StoryComponent />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;

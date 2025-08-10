import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

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
      theme: {
        ...themes.light,
        base: 'light',
        colorPrimary: '#0ea5e9',
        colorSecondary: '#64748b',
        appBg: '#ffffff',
        appContentBg: '#ffffff',
        appBorderColor: '#e2e8f0',
        textColor: '#0f172a',
        barTextColor: '#64748b',
        barSelectedColor: '#0ea5e9',
        barBg: '#ffffff',
        inputBg: '#ffffff',
        inputBorder: '#e2e8f0',
        inputTextColor: '#0f172a',
        inputBorderRadius: 4,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
};

export default preview;
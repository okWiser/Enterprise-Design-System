import type { Preview } from '@storybook/react';

// Disable docs to avoid theme errors
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
      disable: true,
    },
  },
};

export default preview;
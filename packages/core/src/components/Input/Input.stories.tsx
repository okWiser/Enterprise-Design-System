import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },

  argTypes: {
    variant: { control: { type: 'select' }, options: ['outline', 'filled'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
};

export const Filled: Story = {
  args: { variant: 'filled', placeholder: 'Enter text...' },
};

export const Small: Story = {
  args: { size: 'sm', placeholder: 'Small input' },
};

export const Large: Story = {
  args: { size: 'lg', placeholder: 'Large input' },
};

export const Error: Story = {
  args: { error: true, placeholder: 'Error state', value: 'Invalid input' },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled input' },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithFooter: Story;
export declare const SmallPadding: Story;
export declare const LargePadding: Story;

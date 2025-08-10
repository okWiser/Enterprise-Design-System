import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Text } from './Typography';

const HeadingMeta: Meta<typeof Heading> = {
  title: 'Components/Typography/Heading',
  component: Heading,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

const TextMeta: Meta<typeof Text> = {
  title: 'Components/Typography/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default HeadingMeta;

type HeadingStory = StoryObj<typeof Heading>;
type TextStory = StoryObj<typeof Text>;

export const H1: HeadingStory = {
  args: { level: 1, children: 'Heading Level 1' },
};

export const H2: HeadingStory = {
  args: { level: 2, children: 'Heading Level 2' },
};

export const H3: HeadingStory = {
  args: { level: 3, children: 'Heading Level 3' },
};

export const SecondaryHeading: HeadingStory = {
  args: { level: 2, color: 'secondary', children: 'Secondary Heading' },
};

export const AllHeadings: HeadingStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
};

// Text Stories
export const DefaultText: TextStory = {
  args: { children: 'This is default text content.' },
  parameters: { docs: { story: { inline: false } } },
};

export const SmallText: TextStory = {
  args: { size: 'sm', children: 'This is small text content.' },
};

export const LargeText: TextStory = {
  args: { size: 'lg', children: 'This is large text content.' },
};

export const BoldText: TextStory = {
  args: { weight: 'bold', children: 'This is bold text content.' },
};

export const SecondaryText: TextStory = {
  args: { color: 'secondary', children: 'This is secondary text content.' },
};
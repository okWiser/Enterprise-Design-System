import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <h3>Card Title</h3>
        </Card.Header>
        <Card.Body>
          This is the card content. It can contain any React elements.
        </Card.Body>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <h3>Product Card</h3>
        </Card.Header>
        <Card.Body>
          A premium product with excellent features and great value.
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Buy Now</Button>
        </Card.Footer>
      </>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <>
        <Card.Header>
          <h3>Compact Card</h3>
        </Card.Header>
        <Card.Body>
          This card has smaller padding for compact layouts.
        </Card.Body>
      </>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <>
        <Card.Header>
          <h3>Spacious Card</h3>
        </Card.Header>
        <Card.Body>
          This card has larger padding for more breathing room.
        </Card.Body>
      </>
    ),
  },
};
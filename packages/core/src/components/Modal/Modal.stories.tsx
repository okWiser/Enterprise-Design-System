import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },

};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalDemo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <Modal.Header>
          <h2>Modal Title</h2>
        </Modal.Header>
        <Modal.Body>
          This is the modal content. Click outside or the close button to dismiss.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Small: Story = {
  render: () => <ModalDemo size="sm" />,
};

export const Large: Story = {
  render: () => <ModalDemo size="lg" />,
};

export const Open: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <Modal.Header>
          <h2>Always Open Modal</h2>
        </Modal.Header>
        <Modal.Body>
          This modal is always open for demonstration purposes.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Action</Button>
        </Modal.Footer>
      </>
    ),
  },
};
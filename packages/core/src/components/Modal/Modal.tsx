import React from 'react';
import styled from 'styled-components';

const colors = {
  neutral: { 200: '#e2e8f0', 900: '#0f172a' }
};

const typography = {
  fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
  fontSize: { lg: '1.125rem', base: '1rem' },
  fontWeight: { semibold: 600, normal: 400 }
};

const spacing = { 4: '1rem', 6: '1.5rem', 8: '2rem' };

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div<{ size: 'sm' | 'md' | 'lg' }>`
  background: white;
  border-radius: ${spacing[4]};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-height: 90vh;
  overflow-y: auto;
  
  ${({ size }) => {
    const sizes = {
      sm: '400px',
      md: '500px',
      lg: '700px',
    };
    return `
      width: 90vw;
      max-width: ${sizes[size]};
    `;
  }}
`;

const ModalHeader = styled.div`
  padding: ${spacing[6]};
  border-bottom: 1px solid ${colors.neutral[200]};
  
  h2 {
    margin: 0;
    font-family: ${typography.fontFamily.sans.join(', ')};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.semibold};
    color: ${colors.neutral[900]};
  }
`;

const ModalBody = styled.div`
  padding: ${spacing[6]};
  font-family: ${typography.fontFamily.sans.join(', ')};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.normal};
  color: ${colors.neutral[900]};
  line-height: 1.5;
`;

const ModalFooter = styled.div`
  padding: ${spacing[6]};
  border-top: 1px solid ${colors.neutral[200]};
  display: flex;
  gap: ${spacing[4]};
  justify-content: flex-end;
`;

export const Modal: React.FC<ModalProps> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
} = ({ isOpen, onClose, children, size = 'md' }) => {
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContent size={size} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Overlay>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
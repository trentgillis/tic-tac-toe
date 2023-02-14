import '@reach/dialog/styles.css';
import { memo } from 'react';
import styled from 'styled-components';
import { DialogContent, DialogOverlay } from '@reach/dialog';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const StyledDialogOverlay = styled(DialogOverlay)`
  background-color: hsla(0, 0%, 0%, 0.5);
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledDialogContent = styled(DialogContent)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-semi-dark-navy);
`;

export const Modal = memo(({ isOpen, children }: ModalProps) => {
  return (
    <StyledDialogOverlay isOpen={isOpen}>
      <StyledDialogContent>{children}</StyledDialogContent>
    </StyledDialogOverlay>
  );
});

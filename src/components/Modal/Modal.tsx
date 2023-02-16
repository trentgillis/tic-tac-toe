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
  height: 228px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-semi-dark-navy);

  @media only screen and (min-width: 768px) {
    height: 266px;
  }
`;

export const Modal = memo(({ isOpen, children }: ModalProps) => {
  return (
    <StyledDialogOverlay isOpen={isOpen}>
      <StyledDialogContent>{children}</StyledDialogContent>
    </StyledDialogOverlay>
  );
});

import '@reach/dialog/styles.css';
import { memo } from 'react';
import styled from 'styled-components';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { animated, config, useTransition } from '@react-spring/web';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const StyledDialogOverlay = styled(animated(DialogOverlay))`
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
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });

  return transitions(
    (style, item) =>
      item && (
        <StyledDialogOverlay isOpen={isOpen} style={{ opacity: style.opacity }}>
          <StyledDialogContent>{children}</StyledDialogContent>
        </StyledDialogOverlay>
      )
  );
});

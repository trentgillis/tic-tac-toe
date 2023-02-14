import styled from 'styled-components';

import { BodyText, Button, H2, Modal } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

type RestartModalProps = {
  isOpen: boolean;
  hide: () => void;
};

const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export function RestartModal({ isOpen, hide }: RestartModalProps) {
  const gameEngine = useGameEngine();

  return (
    <Modal isOpen={isOpen}>
      <ModalContentWrapper>
        <H2 color="silver">restart game?</H2>
        <ModalButtonWrapper>
          <Button variant="secondary" color="silver" onClick={hide}>
            <BodyText color="dark-navy">no, cancel</BodyText>
          </Button>
          <Button variant="secondary" color="yellow" onClick={() => gameEngine?.restartGame()}>
            <BodyText color="dark-navy">yes, restart</BodyText>
          </Button>
        </ModalButtonWrapper>
      </ModalContentWrapper>
    </Modal>
  );
}

import styled from 'styled-components';

import xMarkIcon from '@/assets/icon-x.svg';
import oMarkIcon from '@/assets/icon-o.svg';
import { BodyText, Button, H1, H2, Modal } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

type WinnerModalProps = {
  isOpen: boolean;
};

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${BodyText} {
    margin-bottom: 8px;
  }
`;

const MarkTextWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  align-items: center;

  ${H1} {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    ${H1} {
      display: inline-block;
    }

    ${H2} {
      display: none;
    }
  }
`;

const MarkIconWrapper = styled.div`
  width: 28px;
  height: 28px;
`;

const ButtonWrappers = styled.div`
  display: flex;
  gap: 16px;

  ${BodyText} {
    font-weight: bold;
  }
`;

export function WinnerModal({ isOpen }: WinnerModalProps) {
  const gameEngine = useGameEngine();

  const winnerIcon = gameEngine?.winner?.token === 'x' ? xMarkIcon : oMarkIcon;
  const winnerTextColor = gameEngine?.winner?.token === 'x' ? 'blue' : 'yellow';

  return (
    <Modal isOpen={isOpen}>
      <ModalContentWrapper>
        <BodyText color="silver">oh no, you lost...</BodyText>
        <MarkTextWrapper>
          <MarkIconWrapper>
            <img src={winnerIcon} alt="winner icon" />
          </MarkIconWrapper>
          <H2 color={winnerTextColor}>takes the round</H2>
          <H1 color={winnerTextColor}>takes the round</H1>
        </MarkTextWrapper>
        <ButtonWrappers>
          <Button variant="secondary" color="silver" onClick={() => gameEngine?.restartGame()}>
            quit
          </Button>
          <Button variant="secondary" color="yellow" onClick={() => gameEngine?.nextRound()}>
            next round
          </Button>
        </ButtonWrappers>
      </ModalContentWrapper>
    </Modal>
  );
}

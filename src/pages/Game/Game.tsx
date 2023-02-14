import styled from 'styled-components';

import { GameBoard, GameBoardHeader } from '@/components';
import { ScoreDisplays } from '@/components/ScoreDisplays/ScoreDisplays';
import { useModal } from '@/lib/hooks/useModal';

const Layout = styled.section`
  height: fit-content;
  width: 100%;
  display: grid;
  gap: 64px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'header header header' 'board board board';

  @media only screen and (min-width: 768px) {
    gap: 20px;
  }
`;

const BoardWrapper = styled.div`
  grid-area: board;
  display: grid;
  grid-template-areas: 'game-board' 'scores';
  gap: 20px;
`;

export function Game() {
  const { Modal, show } = useModal();

  return (
    <>
      <Layout>
        <GameBoardHeader />
        <BoardWrapper>
          <GameBoard />
          <ScoreDisplays />
        </BoardWrapper>
        {/* TODO: Actually implement modal stuff */}
        <button type="button" onClick={show}>
          Show Modal
        </button>
      </Layout>
      <Modal>
        <h1>Winning player</h1>
      </Modal>
    </>
  );
}

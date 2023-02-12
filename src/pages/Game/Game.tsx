import styled from 'styled-components';

import { GameBoard, GameBoardHeader } from '@/components';
import { ScoreDisplays } from '@/components/ScoreDisplays/ScoreDisplays';

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
  return (
    <Layout>
      <GameBoardHeader />
      <BoardWrapper>
        <GameBoard />
        <ScoreDisplays />
      </BoardWrapper>
    </Layout>
  );
}

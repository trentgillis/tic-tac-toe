import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { GameBoard, GameBoardHeader, ScoreDisplays, WinnerModal } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';
import { AIPlayer } from '@/lib/utils/AIPlayer';

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
  const gameEngine = useGameEngine();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(gameEngine?.roundCompleted || false);
  }, [gameEngine?.roundCompleted]);

  useEffect(() => {
    if (gameEngine?.currentPlayer instanceof AIPlayer) {
      const [aiRow, aiCol] = gameEngine.currentPlayer.getBestMove();
      gameEngine.playerTurn(aiRow, aiCol);
    }
  }, [gameEngine?.currentPlayer]);

  return (
    <>
      <Layout>
        <GameBoardHeader />
        <BoardWrapper>
          <GameBoard />
          <ScoreDisplays />
        </BoardWrapper>
      </Layout>
      <WinnerModal isOpen={isOpen} />
    </>
  );
}

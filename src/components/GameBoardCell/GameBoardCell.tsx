import styled from 'styled-components';

import xMarkImg from '@/assets/icon-x.svg';
import oMarkImg from '@/assets/icon-o.svg';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

type GameBoardCellProps = {
  row: number;
  col: number;
};

const Layout = styled.div`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  background-color: var(--color-semi-dark-navy);
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;

  &:hover:not(.populated) {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    &.current-player-x:hover:not(.populated) > * {
      background: url('/src/assets/icon-x-outline.svg') no-repeat center;
    }

    &.current-player-o:hover:not(.populated) > * {
      background: url('/src/assets/icon-o-outline.svg') no-repeat center;
    }

    &.populated {
      cursor: default;
    }
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;

  @media only screen and (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

export function GameBoardCell({ row, col }: GameBoardCellProps) {
  const gameEngine = useGameEngine();

  const handleCellClick = () => {
    if (gameEngine?.boardCells[row][col]) return;

    gameEngine?.playerTurn(row, col);
  };

  return (
    <Layout
      className={`
        ${`current-player-${gameEngine?.currentPlayer.token}`}
        ${gameEngine?.boardCells[row][col] ? 'populated' : ''}
      `}
      onClick={() => handleCellClick()}
    >
      <IconWrapper>
        {gameEngine?.boardCells[row][col] && (
          <img src={gameEngine?.boardCells[row][col] === 'x' ? xMarkImg : oMarkImg} />
        )}
      </IconWrapper>
    </Layout>
  );
}

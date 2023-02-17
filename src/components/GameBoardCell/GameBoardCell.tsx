import styled from 'styled-components';

import xMarkImg from '@/assets/icon-x.svg';
import xMarkImgDark from '@/assets/icon-x-dark-navy.svg';
import oMarkImg from '@/assets/icon-o.svg';
import oMarkImgDark from '@/assets/icon-o-dark-navy.svg';
import { useGameEngine } from '@/lib/hooks/useGameEngine';
import { AIPlayer } from '@/lib/utils/AIPlayer';

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

  &:hover:not(.not-clickable) {
    cursor: pointer;
  }

  &.winning-position-x {
    background-color: var(--color-blue);
    box-shadow: inset 0px -4px 0px #118c87;

    @media only screen and (min-width: 768px) {
      box-shadow: inset 0px -8px 0px #118c87;
    }
  }

  &.winning-position-o {
    background-color: var(--color-yellow);
    box-shadow: inset 0px -4px 0px #cc8b13;

    @media screen and (min-width: 768px) {
      box-shadow: inset 0px -8px 0px #cc8b13;
    }
  }

  @media only screen and (min-width: 768px) {
    &.current-player-x:hover:not(.not-clickable) > * {
      background: url('/src/assets/icon-x-outline.svg') no-repeat center;
      background-size: contain;
    }

    &.current-player-o:hover:not(.not-clickable) > div {
      background: url('/src/assets/icon-o-outline.svg') no-repeat center;
      background-size: contain;
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
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

export function GameBoardCell({ row, col }: GameBoardCellProps) {
  const gameEngine = useGameEngine();

  const isWinningPosition =
    gameEngine?.winningPositions?.some(([winRow, winCol]) => winRow === row && winCol === col) ||
    false;

  const handleCellClick = () => {
    if (gameEngine?.boardCells[row][col]) return;
    if (gameEngine?.currentPlayer instanceof AIPlayer) return;

    gameEngine?.playerTurn(row, col);
  };

  return (
    <Layout
      className={`
        ${`current-player-${gameEngine?.currentPlayer.token}`}
        ${
          gameEngine?.boardCells[row][col] || gameEngine?.currentPlayer instanceof AIPlayer
            ? 'not-clickable'
            : ''
        }
        ${isWinningPosition ? `winning-position-${gameEngine?.winner?.token}` : ''}
      `}
      onClick={() => handleCellClick()}
    >
      <IconWrapper>
        {gameEngine?.boardCells[row][col] && !isWinningPosition && (
          <img src={gameEngine?.boardCells[row][col] === 'x' ? xMarkImg : oMarkImg} />
        )}
        {isWinningPosition && (
          <img src={gameEngine?.winner?.token === 'x' ? xMarkImgDark : oMarkImgDark} />
        )}
      </IconWrapper>
    </Layout>
  );
}

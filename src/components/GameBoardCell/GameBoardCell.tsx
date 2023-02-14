import xMarkImg from '@/assets/icon-x.svg';
import oMarkImg from '@/assets/icon-o.svg';

import { useGameEngine } from '@/lib/hooks/useGameEngine';
import { useEffect, useState } from 'react';
import { ValidTokens } from '@/lib/types/ValidTokens';
import styled from 'styled-components';

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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 64px 64px;
`;

export function GameBoardCell({ row, col }: GameBoardCellProps) {
  const gameEngine = useGameEngine();
  const [mark, setMark] = useState<ValidTokens | undefined | null>(
    gameEngine?.boardCells[row][col]
  );

  useEffect(() => {
    setMark(gameEngine?.board.board[row][col]);
  }, [gameEngine?.boardCells[row][col]]);

  const handleCellClick = () => {
    if (mark) return;

    gameEngine?.playerTurn(row, col);
    setMark(gameEngine?.currentPlayer.token);
  };

  return (
    <Layout
      className={`
        ${`current-player-${gameEngine?.currentPlayer.token}`}
        ${mark ? 'populated' : ''}
      `}
      onClick={() => handleCellClick()}
    >
      <IconWrapper>{mark && <img src={mark === 'x' ? xMarkImg : oMarkImg} />}</IconWrapper>
    </Layout>
  );
}

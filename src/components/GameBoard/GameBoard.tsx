import styled from 'styled-components';

import { GameBoardCell } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

const Layout = styled.article`
  grid-area: game-board;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
`;

export function GameBoard() {
  const gameEngine = useGameEngine();

  const renderCells = (): React.ReactNode[] => {
    const cells: React.ReactNode[] = [];

    gameEngine?.boardCells.map((boardRow, rowNumber) => {
      cells.push(
        ...boardRow.map((_, colNumber) => {
          return <GameBoardCell key={`${rowNumber}${colNumber}`} row={rowNumber} col={colNumber} />;
        })
      );
    });

    return cells;
  };

  return <Layout>{renderCells()}</Layout>;
}

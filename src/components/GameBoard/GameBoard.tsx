import styles from './GameBoard.module.css';

import { GameBoardCell } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

export function GameBoard() {
  const gameEngine = useGameEngine();

  const renderCells = (): React.ReactNode[] => {
    const cells: React.ReactNode[] = [];

    gameEngine?.gameState?.board?.map((boardRow, rowNumber) => {
      cells.push(
        ...boardRow.map((_, colNumber) => {
          return <GameBoardCell key={`${rowNumber}${colNumber}`} row={rowNumber} col={colNumber} />;
        })
      );
    });

    return cells;
  };

  return <article className={styles['game-board']}>{renderCells()}</article>;
}

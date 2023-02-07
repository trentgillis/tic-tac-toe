import styles from './GameBoard.module.css';

import { GameBoardCell } from '@/components';
import { useGameData } from '@/lib/hooks/useGameData';

export function GameBoard() {
  const { gameData } = useGameData();

  const renderCells = (): React.ReactNode[] => {
    const cells: React.ReactNode[] = [];

    gameData?.board?.map((boardRow, rowNumber) => {
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

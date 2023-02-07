import styles from './GameBoardCell.module.css';

import xMarkImg from '@/assets/icon-x-outline.svg';
import oMarkImg from '@/assets/icon-o-outline.svg';

import { useGameEngine } from '@/lib/hooks/useGameEngine';

type GameBoardCellProps = {
  row: number;
  col: number;
};

export function GameBoardCell({ row, col }: GameBoardCellProps) {
  const gameEngine = useGameEngine();

  const populated = false;

  return (
    <div
      className={`${styles['game-board-cell']} 
        ${styles[`current-player-${gameEngine?.currentPlayer}`]}
        ${populated ? styles['populated'] : ''}`}
    >
      <div className={styles['mark-icon']}>
        {populated && <img src={gameEngine?.currentPlayer === 'x' ? xMarkImg : oMarkImg} />}
      </div>
    </div>
  );
}

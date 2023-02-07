import styles from './GameBoardCell.module.css';

import xMarkImg from '@/assets/icon-x-outline.svg';
import oMarkImg from '@/assets/icon-o-outline.svg';

import { useGameData } from '@/lib/hooks/useGameData';

type GameBoardCellProps = {
  row: number;
  col: number;
};

export function GameBoardCell({ row, col }: GameBoardCellProps) {
  const { gameData } = useGameData();

  const populated = false;

  return (
    <div
      className={`${styles['game-board-cell']} 
        ${styles[`current-player-${gameData?.playerTurn}`]}
        ${populated ? styles['populated'] : ''}`}
    >
      <div className={styles['mark-icon']}>
        {populated && <img src={gameData?.playerTurn === 'x' ? xMarkImg : oMarkImg} />}
      </div>
    </div>
  );
}

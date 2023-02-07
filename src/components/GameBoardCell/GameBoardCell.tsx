import styles from './GameBoardCell.module.css';

import xMarkImg from '@/assets/icon-x.svg';
import oMarkImg from '@/assets/icon-o.svg';

import { useGameEngine } from '@/lib/hooks/useGameEngine';
import { useState } from 'react';
import { ValidTokens } from '@/lib/types/ValidTokens';

type GameBoardCellProps = {
  row: number;
  col: number;
};

export function GameBoardCell({ row, col }: GameBoardCellProps) {
  const [mark, setMark] = useState<ValidTokens | undefined>(undefined);
  const gameEngine = useGameEngine();

  const handleCellClick = () => {
    if (mark) return;

    gameEngine?.playerTurn(row, col);
    setMark(gameEngine?.currentPlayer);
  };

  return (
    <div
      className={`${styles['game-board-cell']} 
        ${styles[`current-player-${gameEngine?.currentPlayer}`]}
        ${mark ? styles['populated'] : ''}`}
      onClick={() => handleCellClick()}
    >
      <div className={styles['mark-icon']}>
        {mark && <img src={mark === 'x' ? xMarkImg : oMarkImg} />}
      </div>
    </div>
  );
}

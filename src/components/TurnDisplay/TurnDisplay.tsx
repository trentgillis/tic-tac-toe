import styles from './TurnDisplay.module.css';

import xIcon from '@/assets/icon-x-silver.svg';
import oIcon from '@/assets/icon-o-silver.svg';
import { H4 } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

export function TurnDisplay() {
  const gameEngine = useGameEngine();

  return (
    <div className={styles['layout']}>
      <div className={styles['icon-wrapper']}>
        <img src={gameEngine?.currentPlayer === 'x' ? xIcon : oIcon} alt="current player icon" />
      </div>
      <H4 color="silver">turn</H4>
    </div>
  );
}

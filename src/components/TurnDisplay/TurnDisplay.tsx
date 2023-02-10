import styles from './TurnDisplay.module.css';

import xIcon from '@/assets/icon-x-silver.svg';
import oIcon from '@/assets/icon-o-silver.svg';
import { Heading } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

export function TurnDisplay() {
  const gameEngine = useGameEngine();

  return (
    <div className={styles['layout']}>
      <div className={styles['icon-wrapper']}>
        <img src={gameEngine?.currentPlayer === 'x' ? xIcon : oIcon} alt="current player icon" />
      </div>
      <Heading size="xs" color="silver">
        turn
      </Heading>
    </div>
  );
}

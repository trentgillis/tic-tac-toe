import styles from './GameBoardHeader.module.css';

import resetIcon from '@/assets/icon-restart.svg';
import { Button, Logo } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

export function GameBoardHeader() {
  const gameEngine = useGameEngine();

  return (
    <article className={styles.layout}>
      <span className={styles['logo-wrapper']}>
        <Logo />
      </span>
      <span className={styles['reset-btn-wrapper']}>
        {/* TODO: Update button to pop modal to reset the game */}
        <Button variant="secondary" color="silver" onClick={() => gameEngine?.clearBoard()}>
          <img src={resetIcon} alt="" />
        </Button>
      </span>
    </article>
  );
}

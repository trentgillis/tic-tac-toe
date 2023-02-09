import styles from './Game.module.css';

import { GameBoard } from '@/components';
import { GameBoardHeader } from '@/components/GameBoardHeader/GameBoardHeader';

export function Game() {
  return (
    <section className={styles['layout']}>
      <GameBoardHeader />
      <GameBoard />
    </section>
  );
}

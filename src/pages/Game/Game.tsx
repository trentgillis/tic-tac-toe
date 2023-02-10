import styles from './Game.module.css';

import { GameBoard, GameBoardHeader } from '@/components';

export function Game() {
  return (
    <section className={styles['layout']}>
      <GameBoardHeader />
      <GameBoard />
    </section>
  );
}

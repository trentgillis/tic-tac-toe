import styles from './Game.module.css';

import { GameBoard } from '@/components';

export function Game() {
  return (
    <section className={styles['layout']}>
      <GameBoard />
    </section>
  );
}

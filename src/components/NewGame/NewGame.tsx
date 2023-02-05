import styles from './NewGame.module.css';

import { Logo, PlayerSelect } from '@/components';

export function NewGame() {
  return (
    <div className={styles.layout}>
      <Logo />
      <PlayerSelect />
      {/* TODO: NewGameButtons */}
    </div>
  );
}

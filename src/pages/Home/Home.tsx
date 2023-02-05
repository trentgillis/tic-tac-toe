import styles from './Home.module.css';

import { Logo, PlayerMarkSelect } from '@/components';

export function Home() {
  return (
    <div className={styles.layout}>
      <Logo />
      <PlayerMarkSelect />
    </div>
  );
}

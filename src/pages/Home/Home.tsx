import styles from './Home.module.css';

import { Logo, PlayerSelect } from '@/components';
import { BodyText } from '@/components/Typography/BodyText/BodyText';

export function Home() {
  return (
    <div className={styles.layout}>
      <Logo />
      <PlayerSelect />
      {/* TODO: NewGameButtons */}
    </div>
  );
}

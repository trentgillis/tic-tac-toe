import styles from './PlayerSelect.module.css';

import { Heading } from '@/components';

export function PlayerSelect() {
  return (
    <section className={styles.layout}>
      <Heading size="xs" color="silver">
        PICK PLAYER 1'S MARK
      </Heading>
    </section>
  );
}

import styles from './PlayerSelect.module.css';

import { Heading } from '@/components';
import { BodyText } from '../Typography/BodyText/BodyText';

export function PlayerSelect() {
  return (
    <section className={styles.layout}>
      <Heading size="xs" color="silver">
        pick player 1&apos;s mark
      </Heading>
      <BodyText color="silver">remember&#58; x goes first</BodyText>
    </section>
  );
}

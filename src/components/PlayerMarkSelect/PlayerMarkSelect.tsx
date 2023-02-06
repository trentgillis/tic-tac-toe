import styles from './PlayerSelect.module.css';

import iconXDark from '@/assets/icon-x-dark-navy.svg';
import iconXLight from '@/assets/icon-x-silver.svg';
import iconODark from '@/assets/icon-o-dark-navy.svg';
import iconOLight from '@/assets/icon-o-silver.svg';
import { Heading, BodyText, MarkButton } from '@/components';

export function PlayerMarkSelect() {
  return (
    <section className={styles.layout}>
      <Heading size="xs" color="silver">
        pick player 1&apos;s mark
      </Heading>
      <div className={styles['mark-buttons-wrapper']}>
        <MarkButton imgUrlDark={iconXDark} imgUrlLight={iconXLight} mark="x" />
        <MarkButton imgUrlDark={iconODark} imgUrlLight={iconOLight} mark="o" />
      </div>
      <BodyText color="silver">remember&#58; x goes first</BodyText>
    </section>
  );
}

import styles from './PlayerSelect.module.css';

import iconXDark from '@/assets/icon-x-dark-navy.svg';
import iconXLight from '@/assets/icon-x-silver.svg';
import iconODark from '@/assets/icon-o-dark-navy.svg';
import iconOLight from '@/assets/icon-o-silver.svg';
import { BodyText, MarkButton, H4 } from '@/components';
import { ValidTokens } from '@/lib/types/ValidTokens';

type PlayerMarkSelectProps = {
  playerOneToken: ValidTokens;
  setPlayerOneToken: Function;
};

export function PlayerMarkSelect({ playerOneToken, setPlayerOneToken }: PlayerMarkSelectProps) {
  return (
    <section className={styles.layout}>
      <H4 color="silver">pick player 1&apos;s mark</H4>
      <div className={styles['mark-buttons-wrapper']}>
        <MarkButton
          imgUrlDark={iconXDark}
          imgUrlLight={iconXLight}
          mark="x"
          playerOneToken={playerOneToken}
          setPlayerOneToken={setPlayerOneToken}
        />
        <MarkButton
          imgUrlDark={iconODark}
          imgUrlLight={iconOLight}
          mark="o"
          playerOneToken={playerOneToken}
          setPlayerOneToken={setPlayerOneToken}
        />
      </div>
      <BodyText color="silver">remember&#58; x goes first</BodyText>
    </section>
  );
}

import styles from './MarkButton.module.css';

import { ValidTokens } from '@/lib/types/ValidTokens';

type MarkButtonProps = {
  imgUrlLight: string;
  imgUrlDark: string;
  mark: ValidTokens;
  playerOneToken: ValidTokens;
  setPlayerOneToken: Function;
};

export function MarkButton({
  imgUrlLight,
  imgUrlDark,
  mark,
  playerOneToken,
  setPlayerOneToken,
}: MarkButtonProps) {
  const selected = playerOneToken === mark;

  return (
    <button
      type="button"
      className={`${styles['mark-btn']} ${selected ? styles['mark-btn-selected'] : ''}`}
      onClick={() => setPlayerOneToken(mark)}
    >
      <div className={styles['mark-icon-wrapper']}>
        <img src={selected ? imgUrlDark : imgUrlLight} alt={`mark icon ${mark}`} />
      </div>
    </button>
  );
}

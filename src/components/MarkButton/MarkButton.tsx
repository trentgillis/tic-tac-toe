import styles from './MarkButton.module.css';

import { useGameData } from '@/lib/hooks/useGameData';

type MarkButtonProps = {
  imgUrlLight: string;
  imgUrlDark: string;
  mark: 'x' | 'o';
};

export function MarkButton({ imgUrlLight, imgUrlDark, mark }: MarkButtonProps) {
  const { gameData, setGameData } = useGameData();

  const selected = gameData?.playerOne === mark;

  return (
    <button
      type="button"
      className={`${styles['mark-btn']} ${selected ? styles['mark-btn-selected'] : ''}`}
      onClick={() => setGameData({ ...gameData, playerOne: mark })}
    >
      <div className={styles['mark-icon-wrapper']}>
        <img src={selected ? imgUrlDark : imgUrlLight} alt={`mark icon ${mark}`} />
      </div>
    </button>
  );
}

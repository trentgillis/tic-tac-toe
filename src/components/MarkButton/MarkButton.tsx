import styles from './MarkButton.module.css';

type MarkButtonProps = {
  imgUrlLight: string;
  imgUrlDark: string;
  value: 'x' | 'o';
};

export function MarkButton({ imgUrlLight, imgUrlDark, value }: MarkButtonProps) {
  return (
    <button type="button" className={styles['mark-button']}>
      <div className={styles['img-wrapper']}>
        <img src={imgUrlLight} alt={value} />
      </div>
    </button>
  );
}

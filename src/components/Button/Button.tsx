import styles from './Button.module.css';

import { Heading } from '@/components/Typography';
import { ValidBtnColors } from '@/lib/types/ValidColors';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  color: ValidBtnColors;
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
};

export function Button({ variant, color, onClick, children }: ButtonProps) {
  return (
    <>
      {variant === 'primary' && (
        <button
          type="button"
          className={`${styles['btn']} ${styles['btn-primary']} ${styles[`btn-${color}`]}`}
          onClick={(e) => onClick(e)}
        >
          <Heading size="sm" color="dark-navy">
            {children}
          </Heading>
        </button>
      )}
      {variant === 'secondary' && (
        <button
          type="button"
          className={`${styles['btn']} ${styles['btn-secondary']} ${styles[`btn-${color}`]}`}
          onClick={(e) => onClick(e)}
        >
          {children}
        </button>
      )}
    </>
  );
}

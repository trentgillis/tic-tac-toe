import styles from './BodyText.module.css';

import { ValidColors } from '@/lib/types/ValidColors';

type BodyTextProps = {
  color: ValidColors;
  children: React.ReactNode;
};

export function BodyText({ color, children }: BodyTextProps) {
  return (
    <p style={{ color: `var(--color-${color})` }} className={styles['body-text']}>
      {children}
    </p>
  );
}

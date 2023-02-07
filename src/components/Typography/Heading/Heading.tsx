import styles from './Heading.module.css';

import { ValidTextColors } from '@/lib/types/ValidColors';

type HeadingProps = {
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: ValidTextColors;
  children: React.ReactNode;
};

export function Heading({ size, color, children }: HeadingProps) {
  return (
    <>
      {size === 'lg' && (
        <h1 style={{ color: `var(--color-${color})` }} className={styles['heading-lg']}>
          {children}
        </h1>
      )}
      {size === 'md' && (
        <h2 style={{ color: `var(--color-${color})` }} className={styles['heading-md']}>
          {children}
        </h2>
      )}
      {size === 'sm' && (
        <h3 style={{ color: `var(--color-${color})` }} className={styles['heading-sm']}>
          {children}
        </h3>
      )}
      {size === 'xs' && (
        <h4 style={{ color: `var(--color-${color})` }} className={styles['heading-xs']}>
          {children}
        </h4>
      )}
    </>
  );
}
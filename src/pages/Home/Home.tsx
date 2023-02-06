import styles from './Home.module.css';

import { Button, Logo, PlayerMarkSelect } from '@/components';

export function Home() {
  return (
    <div className={styles['layout']}>
      <Logo />
      <PlayerMarkSelect />
      <div className={styles['btn-container']}>
        <Button variant="primary" color="yellow" onClick={() => console.log('test')}>
          new game &#40;vs cpu&#41;
        </Button>
        <Button variant="primary" color="blue" onClick={() => console.log('test')}>
          new game &#40;vs player&#41;
        </Button>
      </div>
    </div>
  );
}

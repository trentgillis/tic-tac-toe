import styles from './styles/App.module.css';

import { Home } from '@/pages';

export function App() {
  return (
    <main className={styles.layout}>
      <Home />
    </main>
  );
}

import styles from './styles/App.module.css';

import { NewGame } from './components';

export function App() {
  return (
    <main className={styles.layout}>
      <NewGame />
    </main>
  );
}

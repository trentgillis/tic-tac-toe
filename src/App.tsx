import styles from './styles/App.module.css';
import { useState } from 'react';

import { Home } from '@/pages';
import { GameDataProvider } from '@/lib/context/gameDataContext';
import { GameData } from '@/lib/types/GameData';

const initialGameData: GameData = {
  playerOne: 'x',
  playerTwo: 'o',
};

export function App() {
  const [gameData, setGameData] = useState(initialGameData);

  return (
    <main className={styles['layout']}>
      <GameDataProvider value={{ gameData, setGameData }}>
        <Home />
      </GameDataProvider>
    </main>
  );
}

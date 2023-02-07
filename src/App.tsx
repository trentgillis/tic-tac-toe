import styles from './styles/App.module.css';
import { useState } from 'react';

import { Home, Game } from '@/pages';
import { GameDataProvider } from '@/lib/context/gameDataContext';
import { GameData } from '@/lib/types/GameData';

const initialGameData: GameData = {
  gameStarted: false,
  playerTurn: 'x',
  playerX: null,
  playerO: null,
  board: null,
};

export function App() {
  const [gameData, setGameData] = useState(initialGameData);

  return (
    <main className={styles['layout']}>
      <GameDataProvider value={{ gameData, setGameData }}>
        {gameData.gameStarted ? <Game /> : <Home />}
      </GameDataProvider>
    </main>
  );
}

import styles from './styles/App.module.css';

import { Home, Game } from '@/pages';
import { GameEngineProvider } from '@/lib/context/gameEngineContext';
import { useGame } from '@/lib/hooks/useGame';
import { useEffect } from 'react';

export function App() {
  const { gameEngine } = useGame();

  useEffect(() => {
    gameEngine.clearBoard();
    console.log(gameEngine.winningPlayer);
  }, [gameEngine.winningPlayer]);

  return (
    <main className={styles['layout']}>
      <GameEngineProvider value={gameEngine}>
        {gameEngine.gameStarted ? <Game /> : <Home />}
      </GameEngineProvider>
    </main>
  );
}

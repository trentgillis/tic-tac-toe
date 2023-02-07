import styles from './styles/App.module.css';

import { Home, Game } from '@/pages';
import { useGame } from '@/lib/hooks/useGame';
import { GameEngineProvider } from './lib/context/gameEngineContext';

export function App() {
  const { gameEngine } = useGame();

  return (
    <main className={styles['layout']}>
      <GameEngineProvider value={gameEngine}>
        {gameEngine.gameStarted ? <Game /> : <Home />}
      </GameEngineProvider>
    </main>
  );
}

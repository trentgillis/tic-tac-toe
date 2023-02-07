import styles from './styles/App.module.css';

import { Home, Game } from '@/pages';
import { GameEngineProvider } from '@/lib/context/gameEngineContext';
import { useGame } from '@/lib/hooks/useGame';

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

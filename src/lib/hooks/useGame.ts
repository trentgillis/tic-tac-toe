import { useRef, useState } from 'react';

import { GameState } from '@/lib/types/GameState';
import { GameEngine } from '@/lib/utils/GameEngine';
import { initialGameState } from '@/lib/utils/initialGameState';

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const gameEngineRef = useRef(new GameEngine(gameState, setGameState));
  gameEngineRef.current = new GameEngine(gameState, setGameState);

  return {
    gameEngine: gameEngineRef.current,
  };
}

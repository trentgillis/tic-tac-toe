import { useRef, useState } from 'react';

import { GameState } from '@/lib/types/GameState';
import { GameEngine } from '@/lib/utils/GameEngine';

export const initialGameState: GameState = {
  gameStarted: false,
  currentPlayer: 'x',
  playerX: null,
  playerO: null,
  board: Array(3)
    .fill(null)
    .map(() => [null, null, null]),
};

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const gameEngineRef = useRef(new GameEngine(gameState, setGameState));
  gameEngineRef.current = new GameEngine(gameState, setGameState);

  return {
    gameState,
    gameEngine: gameEngineRef.current,
  };
}

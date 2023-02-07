import { useRef, useState } from 'react';

import { GameState } from '@/lib/types/GameState';
import { GameEngine } from '@/lib/utils/GameEngine';

const initialGameState: GameState = {
  gameStarted: false,
  currentPlayer: 'x',
  playerX: null,
  playerO: null,
  board: null,
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

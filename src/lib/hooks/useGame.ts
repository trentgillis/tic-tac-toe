import { useRef, useState } from 'react';

import { GameState } from '@/lib/types/GameState';
import { GameEngine, GAME_DATA_LOCAL_STORAGE_KEY } from '@/lib/utils/GameEngine';
import { initialGameState } from '@/lib/utils/initialGameState';

export function useGame() {
  let initialState: GameState;
  let previousGameState: GameState | null = null;
  if (localStorage.getItem(GAME_DATA_LOCAL_STORAGE_KEY) !== null) {
    previousGameState = GameEngine.loadPreviousGame(
      JSON.parse(localStorage.getItem(GAME_DATA_LOCAL_STORAGE_KEY) as string)
    );
  }

  initialState = previousGameState ? previousGameState : initialGameState;

  const [gameState, setGameState] = useState<GameState>(initialState);
  const gameEngineRef = useRef(new GameEngine(gameState, setGameState));
  gameEngineRef.current = new GameEngine(gameState, setGameState);

  return {
    gameEngine: gameEngineRef.current,
  };
}

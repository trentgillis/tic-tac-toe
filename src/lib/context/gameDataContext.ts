import { createContext } from 'react';

import { GameData } from '@/lib/types/GameData';

type GameDataContext = {
  gameData: GameData | null;
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
};

export const gameDataContext = createContext<GameDataContext>({
  gameData: null,
  setGameData: () => null,
});

export const GameDataProvider = gameDataContext.Provider;

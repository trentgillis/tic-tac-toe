import { createContext } from 'react';

import { GameEngine } from '@/lib/utils/GameEngine';

export const gameEngineContext = createContext<GameEngine | undefined>(undefined);

export const GameEngineProvider = gameEngineContext.Provider;

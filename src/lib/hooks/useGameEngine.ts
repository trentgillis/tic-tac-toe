import { useContext } from 'react';

import { gameEngineContext } from '@/lib/context/gameEngineContext';

export const useGameEngine = () => {
  return useContext(gameEngineContext);
};

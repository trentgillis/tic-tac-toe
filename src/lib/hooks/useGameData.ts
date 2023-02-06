import { useContext } from 'react';

import { gameDataContext } from '@/lib/context/gameDataContext';

export const useGameData = () => useContext(gameDataContext);

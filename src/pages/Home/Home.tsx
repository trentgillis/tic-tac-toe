import styles from './Home.module.css';
import { useState } from 'react';

import { Button, Logo, PlayerMarkSelect } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

export function Home() {
  const [playerOneToken, setPlayerOneToken] = useState<'x' | 'o'>('x');
  const gameEngine = useGameEngine();

  const startGame = (type: 'player' | 'cpu') => {
    const playerXType = playerOneToken === 'x' ? 'player' : type;
    const playerOType = playerOneToken === 'o' ? 'player' : type;

    gameEngine?.startGame(playerXType, playerOType);
  };

  return (
    <div className={styles['layout']}>
      <Logo />
      <PlayerMarkSelect playerOneToken={playerOneToken} setPlayerOneToken={setPlayerOneToken} />
      <div className={styles['btn-container']}>
        <Button variant="primary" color="yellow" onClick={() => startGame('cpu')}>
          new game &#40;vs cpu&#41;
        </Button>
        <Button variant="primary" color="blue" onClick={() => startGame('player')}>
          new game &#40;vs player&#41;
        </Button>
      </div>
    </div>
  );
}

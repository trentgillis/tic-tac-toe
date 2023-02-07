import styles from './Home.module.css';
import { useState } from 'react';

import { Button, Logo, PlayerMarkSelect } from '@/components';
import { useGameData } from '@/lib/hooks/useGameData';

export function Home() {
  const [playerOneToken, setPlayerOneToken] = useState<'x' | 'o'>('x');
  const { setGameData } = useGameData();

  const startGame = (type: 'player' | 'cpu') => {
    setGameData({
      gameStarted: true,
      playerTurn: 'x',
      playerX: {
        token: 'x',
        type: playerOneToken === 'x' ? 'player' : type,
      },
      playerO: {
        token: 'o',
        type: playerOneToken === 'o' ? 'player' : type,
      },
      board: Array(3)
        .fill(null)
        .map(() => [null, null, null]),
    });
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

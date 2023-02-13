import styled from 'styled-components';

import { Button } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

type MenuButtonsProps = {
  playerOneToken: string;
};

const Layout = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export function MenuButtons({ playerOneToken }: MenuButtonsProps) {
  const gameEngine = useGameEngine();

  const startGame = (type: 'player' | 'cpu') => {
    const playerXType = playerOneToken === 'x' ? 'player' : type;
    const playerOType = playerOneToken === 'o' ? 'player' : type;

    gameEngine?.startGame(playerXType, playerOType);
  };
  return (
    <Layout>
      <Button variant="primary" color="yellow" onClick={() => startGame('cpu')}>
        new game &#40;vs cpu&#41;
      </Button>
      <Button variant="primary" color="blue" onClick={() => startGame('player')}>
        new game &#40;vs player&#41;
      </Button>
    </Layout>
  );
}

import styled from 'styled-components';

import { Button } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';
import { ValidTokens } from '@/lib/types/ValidTokens';

type MenuButtonsProps = {
  playerOneToken: ValidTokens;
};

const Layout = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export function MenuButtons({ playerOneToken }: MenuButtonsProps) {
  const gameEngine = useGameEngine();

  const startGame = (type: 'player' | 'ai') => {
    if (type === 'ai') {
      gameEngine?.startAIGame(playerOneToken);
    } else {
      gameEngine?.startHumanGame(playerOneToken);
    }
  };
  return (
    <Layout>
      <Button variant="primary" color="yellow" onClick={() => startGame('ai')}>
        new game &#40;vs ai&#41;
      </Button>
      <Button variant="primary" color="blue" onClick={() => startGame('player')}>
        new game &#40;vs player&#41;
      </Button>
    </Layout>
  );
}

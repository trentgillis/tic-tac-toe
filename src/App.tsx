import styled from 'styled-components';

import { Home, Game } from '@/pages';
import { GameEngineProvider } from '@/lib/context/gameEngineContext';
import { useGame } from '@/lib/hooks/useGame';

const Layout = styled.main`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'game';

  & > * {
    grid-column: game;
  }

  @media only screen and (min-width: 768px) {
    padding: 0;
    grid-template-columns: 1fr 460px 1fr;
    grid-template-areas: '. game .';
    align-items: center;
    justify-items: center;
  }
`;

export function App() {
  const { gameEngine } = useGame();

  return (
    <Layout>
      <GameEngineProvider value={gameEngine}>
        {gameEngine.gameInProgress ? <Game /> : <Home />}
      </GameEngineProvider>
    </Layout>
  );
}

import { useGameEngine } from '@/lib/hooks/useGameEngine';
import styled from 'styled-components';
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay';

const Layout = styled.article`
  grid-area: scores;
  width: 100%;
  height: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;

  @media only screen and (min-width: 768px) {
    height: 72px;
  }
`;

export function ScoreDisplays() {
  const gameEngine = useGameEngine();

  return (
    <Layout>
      <ScoreDisplay
        playerText={`X (${gameEngine?.playerX?.playerShortName})`}
        color="blue"
        score={gameEngine?.playerScores.x || 0}
      />
      <ScoreDisplay playerText="draw" color="silver" score={gameEngine?.playerScores.d || 0} />
      <ScoreDisplay
        playerText={`O (${gameEngine?.playerO?.playerShortName})`}
        color="yellow"
        score={gameEngine?.playerScores.o || 0}
      />
    </Layout>
  );
}

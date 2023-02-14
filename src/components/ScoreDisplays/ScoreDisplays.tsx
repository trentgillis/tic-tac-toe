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
      <ScoreDisplay playerText="p1 (x)" color="blue" score={gameEngine?.scores.x || 0} />
      <ScoreDisplay playerText="draw" color="silver" score={gameEngine?.scores.d || 0} />
      <ScoreDisplay playerText="p2 (o)" color="yellow" score={gameEngine?.scores.o || 0} />
    </Layout>
  );
}

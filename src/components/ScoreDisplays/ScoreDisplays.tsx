import styled from 'styled-components';
import { ScoreDisplay } from '../ScoreDisplay /ScoreDisplay';

const Layout = styled.article`
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
  return (
    <Layout>
      <ScoreDisplay playerText="p1 (x)" color="blue" />
      <ScoreDisplay playerText="draw" color="silver" />
      <ScoreDisplay playerText="p2 (o)" color="yellow" />
    </Layout>
  );
}

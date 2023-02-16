import styled from 'styled-components';
import { BodyText, H2, H3, H4 } from '../Typography';

type ScoreDisplayProps = {
  playerText: string;
  color: 'blue' | 'yellow' | 'silver';
  score: number;
};

const Layout = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => `var(--color-${color})`};
  border-radius: 15px;

  ${H2} {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    ${H2} {
      display: inline;
    }

    ${H3} {
      display: none;
    }
  }
`;

export function ScoreDisplay({ playerText, color, score }: ScoreDisplayProps) {
  return (
    <Layout color={color}>
      <BodyText color="dark-navy">{playerText}</BodyText>
      <H2 color="dark-navy">{score}</H2>
      <H3 color="dark-navy">{score}</H3>
    </Layout>
  );
}

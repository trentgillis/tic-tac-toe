import styled from 'styled-components';
import { BodyText } from '../Typography';

type ScoreDisplayProps = {
  playerText: string;
  color: 'blue' | 'yellow' | 'silver';
  // TODO
  // score: number;
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
`;

export function ScoreDisplay({ playerText, color }: ScoreDisplayProps) {
  return (
    <Layout color={color}>
      <BodyText color="dark-navy">{playerText}</BodyText>
    </Layout>
  );
}

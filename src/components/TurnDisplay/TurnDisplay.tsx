import styled from 'styled-components';

import xIcon from '@/assets/icon-x-silver.svg';
import oIcon from '@/assets/icon-o-silver.svg';
import { H4 } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';

const Layout = styled.div`
  background-color: var(--color-semi-dark-navy);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 5px;
  box-shadow: inset 0px -4px 0px #10212a;

  & > * {
    margin-bottom: 4px;
  }
`;

const ImgContainer = styled.div`
  height: 16px;
  width: 16px;

  @media only screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export function TurnDisplay() {
  const gameEngine = useGameEngine();

  return (
    <Layout>
      <ImgContainer>
        <img
          src={gameEngine?.currentPlayer.token === 'x' ? xIcon : oIcon}
          alt="current player icon"
        />
      </ImgContainer>
      <H4 color="silver">turn</H4>
    </Layout>
  );
}

import { useState } from 'react';
import styled from 'styled-components';

import { Logo, MenuButtons, PlayerMarkSelect } from '@/components';

const Layout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export function Home() {
  const [playerOneToken, setPlayerOneToken] = useState<'x' | 'o'>('x');

  return (
    <Layout>
      <Logo />
      <PlayerMarkSelect playerOneToken={playerOneToken} setPlayerOneToken={setPlayerOneToken} />
      <MenuButtons playerOneToken={playerOneToken} />
    </Layout>
  );
}

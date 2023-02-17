import styled from 'styled-components';

import restartIcon from '@/assets/icon-restart.svg';
import { BodyText, Button, H2, Logo, TurnDisplay } from '@/components';
import { useGameEngine } from '@/lib/hooks/useGameEngine';
import { useModal } from '@/lib/hooks/useModal';
import { useState } from 'react';
import { RestartModal } from '../RestartModal/RestartModal';

const Layout = styled.article`
  grid-area: header;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'logo turn reset';

  @media only screen and (min-width: 768px) {
    height: 52px;
  }
`;

const LogoWrapper = styled.span`
  grid-area: logo;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.span`
  grid-area: reset;
  display: flex;
  justify-content: right;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
  }

  @media only screen and (min-width: 768px) {
    button {
      padding: 16px;
      height: 52px;
      width: 52px;
    }
  }
`;

const RestartIconWrapper = styled.div`
  width: 16px;
  height: 16px;

  @media only screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export function GameBoardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  return (
    <>
      <Layout>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <TurnDisplay />
        <ButtonWrapper>
          <Button variant="secondary" color="silver" onClick={show}>
            <RestartIconWrapper>
              <img src={restartIcon} alt="restart button icon" />
            </RestartIconWrapper>
          </Button>
        </ButtonWrapper>
      </Layout>
      <RestartModal isOpen={isOpen} hide={hide} />
    </>
  );
}

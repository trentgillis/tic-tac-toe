import styled from 'styled-components';

import iconXDark from '@/assets/icon-x-dark-navy.svg';
import iconXLight from '@/assets/icon-x-silver.svg';
import iconODark from '@/assets/icon-o-dark-navy.svg';
import iconOLight from '@/assets/icon-o-silver.svg';
import { BodyText, MarkButton, H4 } from '@/components';
import { ValidTokens } from '@/lib/types/ValidTokens';

type PlayerMarkSelectProps = {
  playerOneToken: ValidTokens;
  setPlayerOneToken: Function;
};

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 24px;
  background-color: var(--color-semi-dark-navy);
  border-radius: 15px;
  width: 100%;
  box-shadow: inset 0px -8px 0px #10212a;
`;

const ButtonWrapper = styled.div`
  padding: 8px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  background-color: var(--color-dark-navy);
`;

export function PlayerMarkSelect({ playerOneToken, setPlayerOneToken }: PlayerMarkSelectProps) {
  return (
    <Layout>
      <H4 color="silver">pick player 1&apos;s mark</H4>
      <ButtonWrapper>
        <MarkButton
          imgUrlDark={iconXDark}
          imgUrlLight={iconXLight}
          mark="x"
          playerOneToken={playerOneToken}
          setPlayerOneToken={setPlayerOneToken}
        />
        <MarkButton
          imgUrlDark={iconODark}
          imgUrlLight={iconOLight}
          mark="o"
          playerOneToken={playerOneToken}
          setPlayerOneToken={setPlayerOneToken}
        />
      </ButtonWrapper>
      <BodyText color="silver">remember&#58; x goes first</BodyText>
    </Layout>
  );
}

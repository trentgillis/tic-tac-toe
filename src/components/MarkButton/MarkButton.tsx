import styled from 'styled-components';

import { ValidTokens } from '@/lib/types/ValidTokens';

type MarkButtonProps = {
  imgUrlLight: string;
  imgUrlDark: string;
  mark: ValidTokens;
  playerOneToken: ValidTokens;
  setPlayerOneToken: Function;
};

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: var(--color-dark-navy);
  transition: background-color 0.3s ease;

  :hover {
    cursor: pointer;
    background-color: var(--color-semi-dark-navy);
  }

  &.selected {
    background-color: var(--color-silver);

    :hover {
      cursor: default;
      background-color: var(--color-silver);
    }
  }
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

export function MarkButton({
  imgUrlLight,
  imgUrlDark,
  mark,
  playerOneToken,
  setPlayerOneToken,
}: MarkButtonProps) {
  const selected = playerOneToken === mark;

  return (
    <Btn
      type="button"
      className={selected ? 'selected' : ''}
      onClick={() => setPlayerOneToken(mark)}
    >
      <IconWrapper>
        <img src={selected ? imgUrlDark : imgUrlLight} alt={`mark icon ${mark}`} />
      </IconWrapper>
    </Btn>
  );
}

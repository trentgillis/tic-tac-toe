import styled from 'styled-components';

import { H2 } from '@/components/Typography';
import { ValidBtnColors } from '@/lib/types/ValidColors';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  color: ValidBtnColors;
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
};

const StyledButton = styled.button`
  border: none;
  transition: background-color 0.3s ease;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }

  &.yellow {
    background-color: var(--color-yellow);

    :hover {
      background-color: var(--color-yellow-hover);
    }
  }

  &.blue {
    background-color: var(--color-blue);

    :hover {
      background-color: var(--color-blue-hover);
    }
  }

  &.silver {
    background-color: var(--color-silver);

    :hover {
      background-color: var(--color-silver-hover);
    }
  }
`;

const PrimaryButton = styled(StyledButton)`
  width: 100%;
  padding: 16px 16px 24px 16px;
  border-radius: 15px;

  &.yellow {
    box-shadow: inset 0px -8px 0px #cc8b13;
  }

  &.blue {
    box-shadow: inset 0px -8px 0px #118c87;
  }

  &.silver {
    box-shadow: inset 0px -8px 0px #6b8997;
  }
`;

const SecondaryButton = styled(StyledButton)`
  padding: 16px;
  border-radius: 10px;

  &.yellow {
    box-shadow: inset 0px -4px 0px #cc8b13;
  }

  &.blue {
    box-shadow: inset 0px -4px 0px #118c87;
  }

  &.silver {
    box-shadow: inset 0px -4px 0px #6b8997;
  }
`;

export function Button({ variant, color, onClick, children }: ButtonProps) {
  return (
    <>
      {variant === 'primary' && (
        <PrimaryButton type="button" className={color} onClick={(e) => onClick(e)}>
          <H2 color="dark-navy">{children}</H2>
        </PrimaryButton>
      )}
      {variant === 'secondary' && (
        <SecondaryButton type="button" className={color} onClick={(e) => onClick(e)}>
          {children}
        </SecondaryButton>
      )}
    </>
  );
}

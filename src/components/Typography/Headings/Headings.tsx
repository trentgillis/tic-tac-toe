import { ValidTextColors } from '@/lib/types/ValidColors';
import styled from 'styled-components';

type HeadingProps = {
  color: ValidTextColors;
  children: React.ReactNode;
};

export const H1 = styled.h1<HeadingProps>`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ color }) => `var(--color-${color})`};
`;

export const H2 = styled.h2<HeadingProps>`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ color }) => `var(--color-${color})`};
`;

export const H3 = styled.h3<HeadingProps>`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: ${({ color }) => `var(--color-${color})`};
`;

export const H4 = styled.h4<HeadingProps>`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ color }) => `var(--color-${color})`};
`;

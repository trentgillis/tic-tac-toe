import { ValidTextColors } from '@/lib/types/ValidColors';
import styled from 'styled-components';

type BodyTextProps = {
  color: ValidTextColors;
  children: React.ReactNode;
};

export const BodyText = styled.p<BodyTextProps>`
  font-size: 14px;
  font-weight: medium;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${({ color }) => `var(--color-${color})`};
`;

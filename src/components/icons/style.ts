import styled from 'styled-components';

import type { TIconProps } from '@/types/components';

export const Icon = styled.svg<TIconProps>`
  width: ${({ $width }) => ($width ? $width : 'var(--2xl)')};
  height: ${({ $height }) => ($height ? $height : 'var(--2xl)')};

  path {
    fill: ${({ $color }) => $color};
    stroke: ${({ $stroke }) => $stroke};
  }
`;

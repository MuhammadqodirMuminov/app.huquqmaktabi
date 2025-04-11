import styled from 'styled-components';

import type { TBoxProps } from '@/types/components';

export const Box = styled.div<TBoxProps>`
  align-items: ${({ $align }) => $align};
  background: ${({ $bg }) => $bg};
  border-radius: ${({ $rounded }) => $rounded};
  color: ${({ $color }) => $color};
  display: ${({ $align, $justify, $direction, $gap }) =>
    ($align || $justify || $direction || $gap) && 'flex'};
  flex-direction: ${({ $direction }) => $direction};
  flex-wrap: ${({ $wrap }) => $wrap};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  height: ${({ $height }) => $height};
  margin: ${({ $m }) => $m};
  margin-left: ${({ $ml }) => $ml};
  margin-bottom: ${({ $mb }) => $mb};
  margin-right: ${({ $mr }) => $mr};
  margin-top: ${({ $mt }) => $mt};
  padding: ${({ $p }) => $p};
  padding-bottom: ${({ $pb }) => $pb};
  padding-top: ${({ $pt }) => $pt};
  width: ${({ $width }) => $width};
  ${({ $sx }) => $sx}
`;

export const ScrollBox = styled(Box)`
  display: flex;
  gap: var(--base);
  padding: var(--base);
  padding-bottom: ${({ $pb }) => $pb};
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

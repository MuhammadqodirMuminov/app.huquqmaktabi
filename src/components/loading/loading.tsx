import { Spin, SpinProps } from 'antd';

import { Box } from '../box';
import { SkChase, SkChaseDot } from './style';

export const Loading = ({
  isFull = false,
  isWhite = false,
}: {
  isFull?: boolean;
  isWhite?: boolean;
}) => (
  <Box
    $align="center"
    $justify="center"
    $height={isFull ? '100vh' : 'var(--full)'}
    $width="var(--full)"
    $sx={{ minHeight: '30vh', maxHeight: '100vh' }}
  >
    <SkChase>
      <SkChaseDot $isWhite={isWhite} />
      <SkChaseDot $isWhite={isWhite} />
      <SkChaseDot $isWhite={isWhite} />
      <SkChaseDot $isWhite={isWhite} />
      <SkChaseDot $isWhite={isWhite} />
      <SkChaseDot $isWhite={isWhite} />
    </SkChase>
  </Box>
);

export const Spinner = ({ ...props }: SpinProps) => (
  <Spin indicator={<Loading isWhite={props.fullscreen} />} {...props} />
);

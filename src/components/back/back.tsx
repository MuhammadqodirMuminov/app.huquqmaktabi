import { Typography } from 'antd';

import { Box } from '../box';
import { Icon, Icons } from '../icons';

import type { TBackProps } from '@/types/components';

export const Back = ({ label, isWhite = false }: TBackProps) => {
  const handleBack = () => {
    history.back();
  };

  return (
    <Box $align="center" $justify="space-between" $p="var(--base)">
      <Box $align="center" $justify="center" onClick={handleBack}>
        <Icon
          as={Icons.Back}
          $color={isWhite ? 'var(--white)' : '#000'}
          $height="var(--sm)"
          $width="var(--base)"
        />
      </Box>

      <Box
        as={Typography}
        $sx={{
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        {label}
      </Box>

      <Box />
    </Box>
  );
};

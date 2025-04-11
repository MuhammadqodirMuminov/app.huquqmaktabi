import { useTranslation } from 'react-i18next';
import { Empty, Typography } from 'antd';

import type { TEmptyProps } from '@/types/components';
import { Box, Icon, Icons } from '@/components';

export const CustomEmpty = ({
  height = undefined,
  text = undefined,
}: TEmptyProps) => {
  const { t } = useTranslation('');

  return (
    <Box
      $align="center"
      $justify="center"
      $height={height ? `${height}px` : 'var(--full)'}
      $width="var(--full)"
    >
      <Empty
        description={
          <Typography.Text>{text ? text : t('noData')}</Typography.Text>
        }
        image={<Icon as={Icons.Empty} $height="121px" $width="141px" />}
      />
    </Box>
  );
};

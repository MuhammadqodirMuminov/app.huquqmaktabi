import { Radio, Typography } from 'antd';
import styled from 'styled-components';

import { Box } from '../box';
import { Icons } from '../icons';

import type { TRadioItemProps } from '@/types/components';

export const RadioItem = ({ icon, label, ...props }: TRadioItemProps) => (
  <Box
    as={Radio}
    $align="center"
    $bg="#f9f9f9"
    $justify="space-between"
    $p="var(--sm) var(--base)"
    $rounded="var(--base)"
    $width="var(--full)"
    {...props}
  >
    <Box $align="center" $gap="var(--ss)">
      <Box as={Icons[icon as keyof typeof Icons]} />

      <Typography.Title level={5}>{label}</Typography.Title>
    </Box>
  </Box>
);

export const RadioGroup = styled(Radio.Group)`
  width: var(--full);

  .ant-radio-wrapper {
    flex-direction: row-reverse;
    padding: var(--base);

    &::after {
      content: none;
    }
  }

  .ant-radio-wrapper:nth-child(1n) {
    margin-top: var(--base);
  }

  span {
    padding: 0 !important;
  }
`;

import { Typography } from 'antd';

import { Box } from '../box';

import type { TCardItemProps, TCardProps } from '@/types/components';

export const Card = ({
  id,
  title,
  subTitle,
  children,
  ...props
}: TCardProps) => {
  return (
    <Box
      id={id}
      $direction="column"
      $gap={title && 'var(--ss)'}
      $p="var(--base)"
      $rounded="var(--base)"
      $sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
      {...props}
    >
      {title && <Typography.Title level={5}>{title}</Typography.Title>}
      {subTitle && <Typography.Title level={5}>{subTitle}</Typography.Title>}

      {children}
    </Box>
  );
};

export const CardItem = ({ label, value, children }: TCardItemProps) => (
  <Box $gap="var(--ss)" $justify="space-between">
    <Box
      as={Typography.Text}
      type="secondary"
      $sx={{ minWidth: '20%', maxWidth: '80%' }}
    >
      {label}
    </Box>

    {children ? (
      children
    ) : (
      <Box
        as={Typography.Text}
        strong
        $sx={{ minWidth: '20%', maxWidth: '80%', textAlign: 'end' }}
      >
        {value}
      </Box>
    )}
  </Box>
);

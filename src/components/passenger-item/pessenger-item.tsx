import { Typography } from 'antd';

import { Box } from '../box';
import { Icon, Icons } from '../icons';

import type { TBoxProps, TPassengerItemProps } from '@/types/components';

export const PassengerItem = ({
  count,
  isTicket,
  from,
  who,
  onClickMinus,
  onClickPlus,
}: TPassengerItemProps) => {
  const boxStyles: TBoxProps = {
    $align: 'center',
    $bg: '#E3E3E3',
    $justify: 'center',
    $height: '44px',
    $rounded: '50px',
    $width: '44px',
  };

  return (
    <Box $align="center" $justify="space-between">
      {isTicket ? (
        <>
          <Box $direction="column">
            <Typography.Text strong>{who}</Typography.Text>
            <Typography.Text type="secondary">{from}</Typography.Text>
          </Box>

          <Box $align="center" $gap="var(--base)">
            <Box {...boxStyles} onClick={onClickMinus}>
              <Icon as={Icons.Minus} />
            </Box>

            <Typography.Title level={4} className="tabular">
              {count}
            </Typography.Title>

            <Box {...boxStyles} onClick={onClickPlus}>
              <Icon as={Icons.Plus} />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box {...boxStyles} onClick={onClickMinus}>
            <Icon as={Icons.Minus} />
          </Box>

          <Box $align="center" $direction="column">
            <Typography.Title level={4} className="tabular">
              {count}
            </Typography.Title>
            <Typography.Text type="secondary">{who}</Typography.Text>
            <Typography.Text type="secondary">{from}</Typography.Text>
          </Box>

          <Box {...boxStyles} onClick={onClickPlus}>
            <Icon as={Icons.Plus} />
          </Box>
        </>
      )}
    </Box>
  );
};

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import type { TNavigationItem } from '@/types/components';
import { Box, Icon } from '@/components';
import { Label } from '@/modules/style';
import { history } from '@/utils/history';

export const Item = ({ item }: { item: TNavigationItem }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const handleClick = () => {
    history.push(item.path);
  };

  const isActive = pathname.includes(item.path);

  return (
    <Box
      $align="center"
      $direction="column"
      $gap="4px"
      onClick={handleClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Icon
        as={isActive ? item.activeIcon : item.icon}
        $height="var(--xl)"
        $width="var(--xl)"
      />

      <Label $active={isActive}>{t(`navigation[${item.id}]`)}</Label>
    </Box>
  );
};

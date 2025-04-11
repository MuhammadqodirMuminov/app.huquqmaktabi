import { Item } from './item';

import { useAuthStore } from '@/store/auth';
import { Box } from '@/components';
import { navigation } from '@/constants';

export const Navigation = () => {
  const { user } = useAuthStore();

  return (
    <Box $align="center" $justify="space-around">
      {navigation(user).map((item) => (
        <Item key={item.path} item={item} />
      ))}
    </Box>
  );
};

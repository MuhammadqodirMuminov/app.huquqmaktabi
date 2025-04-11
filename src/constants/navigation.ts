import type { TUser } from '@/types/auth';
import { Icons } from '@/components';
import { getRoute } from '@/utils/general';
import { ROUTES } from '@/constants';

export const navigation = (user: TUser | null) => [
  {
    id: 0,
    icon: Icons.Home,
    activeIcon: Icons.HomeActive,
    path: ROUTES.home,
  },
  {
    id: 1,
    icon: Icons.Services,
    activeIcon: Icons.ServicesActive,
    path: ROUTES.services,
  },
  ...(user
    ? [
        {
          id: 2,
          icon: Icons.Orders,
          activeIcon: Icons.OrdersActive,
          path: getRoute(ROUTES.orders),
        },
      ]
    : []),
  {
    id: 3,
    icon: Icons.Profile,
    activeIcon: Icons.ProfileActive,
    path: ROUTES.profile,
  },
];

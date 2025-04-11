import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Spin, Typography } from 'antd';

import { getUserBalance, formatUserName } from './util';

import { useGetMeQuery } from '@/services/auth';
import { useAuthStore } from '@/store/auth';
import { EGiftState } from '@/types/auth';
import { Box, Icon, Icons } from '@/components';
import { history } from '@/utils/history';
import { ROUTES, SEARCH_KEYS } from '@/constants';
import { getRoute, searchPush } from '@/utils/general';

export const User = ({ isMain }: { isMain?: boolean }) => {
  const { t } = useTranslation('', { keyPrefix: 'user' });
  const { user, userName, setUser } = useAuthStore();
  const { data, isFetched, isLoading } = useGetMeQuery(!!user);

  useEffect(() => {
    if (data && isFetched && data !== user) {
      setUser(data);
    }
  }, [data, isFetched, user, setUser]);

  const handlePushUser = () => {
    searchPush(ROUTES.welcome, `${SEARCH_KEYS.step}=${user ? '1' : '0'}`);
  };

  const handleClickPush = (route: string) => history.push(route);

  const gift = () => (
    <Box
      $bg="var(--primary)"
      $color="var(--white)"
      $p="var(--ss) var(--sm)"
      $rounded="50px"
      onClick={handlePushUser}
    >
      🎁 {t('getBonus')}
    </Box>
  );

  const balance = () => (
    <Box
      $direction="column"
      onClick={handleClickPush.bind(
        null,
        getRoute(ROUTES.profile, ROUTES.balance),
      )}
    >
      <Typography.Text type="secondary">{t('balance')}</Typography.Text>

      <Box as={Typography.Text} strong $sx={{ textAlign: 'end' }}>
        {getUserBalance(user)} USD
      </Box>
    </Box>
  );

  return (
    <Spin spinning={isLoading} indicator={<></>}>
      <Box
        $align="center"
        $justify="space-between"
        $p={isMain ? '0' : 'var(--base)'}
        $sx={{
          borderBottom: isMain ? 'none' : '1px solid var(--purple)',
        }}
      >
        <Box
          $align="center"
          $gap="var(--ss)"
          onClick={handleClickPush.bind(
            null,
            getRoute(ROUTES.profile, ROUTES.info),
          )}
        >
          {user && (
            <Box
              as={Avatar}
              src={
                user.pictureUrl || (
                  <Typography.Text strong>
                    {formatUserName(user)}
                  </Typography.Text>
                )
              }
              icon={<Icon as={Icons.User} />}
              $bg="var(--gray)"
              $height="44px"
              $width="44px"
            />
          )}

          <Box $direction="column">
            {isMain || !user ? (
              <>
                <Typography.Text type="secondary">
                  {t('subTitle')}
                </Typography.Text>
                <Typography.Text strong>
                  {user?.firstName || userName || t('title')} 👋
                </Typography.Text>
              </>
            ) : (
              <>
                {user?.login && !user.login.endsWith('@facebook.tmp') && (
                  <Typography.Text type="secondary">
                    {user.login}
                  </Typography.Text>
                )}

                {user && (
                  <Typography.Text strong>
                    {`${user.firstName || ''} ${user.lastName || ''}`.trim()}
                  </Typography.Text>
                )}
              </>
            )}
          </Box>
        </Box>

        <Box $align="center" $gap="var(--ss)">
          {isMain &&
            user &&
            (user?.giftState === EGiftState.CanBeGiven ? gift() : balance())}

          {!user && gift()}

          {/* <Box
            $align="center"
            $justify="center"
            $height="44px"
            $rounded="50px"
            $width="44px"
            $sx={{ border: '1px solid var(--purple)' }}
            // onClick={handleClickPush.bind(null, ROUTES.notifications)}
          >
            <Icon as={Icons.Notifications} />
          </Box> */}
        </Box>
      </Box>
    </Spin>
  );
};

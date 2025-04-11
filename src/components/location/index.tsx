import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Spin, Typography } from 'antd';

import { useAppStore } from '@/store/app';
import { useCountries } from '@/hooks/use-countries';
import type { TLocationProps } from '@/types/components';
import { Box, CustomDrawer, Icon, Icons } from '@/components';
import { SEARCH_KEYS } from '@/constants';

export const Location = ({
  onChange = undefined,
  isMain = false,
  isExtra = true,
  countryCode = undefined,
}: TLocationProps) => {
  const { t } = useTranslation('', { keyPrefix: 'home' });
  const [searchParams, setSearchParams] = useSearchParams();
  const { setIsDrawer, setCountryCode } = useAppStore();
  const { countries, foundedCountry, isLoading } = useCountries(countryCode);

  const handleClickCountry = (code: string) => {
    setCountryCode(code);
    setIsDrawer(false);

    if (onChange) {
      onChange();
    }

    if (searchParams.has(SEARCH_KEYS.id)) {
      searchParams.delete(SEARCH_KEYS.id);
      searchParams.delete(SEARCH_KEYS.code);
      setSearchParams(searchParams);
    }
  };

  const handleOpenDrawer = () => {
    setIsDrawer(true);
  };

  return (
    <>
      <Spin spinning={isLoading} indicator={<></>}>
        {isMain ? (
          <Box
            $align="center"
            $color="var(--white)"
            $justify="space-between"
            $rounded="50px"
            $p="var(--sm)"
            $sx={{
              border: '1px solid var(--purple)',
            }}
            onClick={handleOpenDrawer}
          >
            <Box $align="center" $gap="var(--ss)">
              <Box $direction="column" $gap="4px">
                <Box
                  as={Typography}
                  $color="rgba(80, 88, 107, 1)"
                  $sx={{ fontSize: 10, lineHeight: 'var(--full)' }}
                >
                  {t('location')}
                </Box>

                <Box
                  as={Typography}
                  $sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: 'var(--full)',
                  }}
                >
                  {isLoading ? t('loading') : foundedCountry?.name}
                </Box>
              </Box>
            </Box>

            <Icon as={Icons.ArrowDown} $stroke="var(--purple)" />
          </Box>
        ) : (
          <Box
            $align="center"
            $bg="var(--white)"
            $justify="space-between"
            $p="var(--base)"
            $pt={isExtra ? '0' : 'var(--base)'}
            $sx={{
              borderBottom: '1px solid #EDEDED',
            }}
            onClick={handleOpenDrawer}
          >
            <Box $align="center" $gap="var(--ss)">
              <Icon as={Icons.Location} $color="#6E8D9A" />

              <Box
                as={Typography}
                $color="#3A3A44"
                $sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 'var(--full)',
                }}
              >
                {isLoading ? t('loading') : foundedCountry?.name}
              </Box>
            </Box>

            <Icon as={Icons.ArrowDown} $stroke="#6E8D9A" />
          </Box>
        )}
      </Spin>

      <CustomDrawer>
        <Box $direction="column" $gap="var(--base)">
          {countries?.content.map((item) => (
            <Box
              key={item.id}
              $align="end"
              $height="100px"
              $rounded="var(--base)"
              $p="var(--base)"
              $sx={{
                backgroundImage: `url(${item.picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
              onClick={handleClickCountry.bind(null, item.code)}
            >
              <Box
                $sx={{
                  background:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 100%, rgba(0, 0, 0, 0.00) 100%)',
                  borderRadius: 16,
                  bottom: 0,
                  height: 'var(--full)',
                  left: 0,
                  position: 'absolute',
                  width: 'var(--full)',
                }}
              />

              <Box as="h2" $sx={{ zIndex: 2 }}>
                {item.name}
              </Box>
            </Box>
          ))}
        </Box>
      </CustomDrawer>
    </>
  );
};

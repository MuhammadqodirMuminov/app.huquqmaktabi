import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';

import { Box } from '../box';

export const fallbackRender = () => <FallbackRender />;

const FallbackRender = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const handleGoBack = () => {
    queryClient.clear();
    window.location.pathname = '/main';
  };

  const handleReload = () => {
    queryClient.clear();
    window.location.reload();
  };

  return (
    <Box
      $align="center"
      $justify="center"
      $direction="column"
      $gap="20px"
      $height="100svh"
      $width="100svw"
      $p="20px"
    >

      <Typography.Title level={4}>{t('error-page.text')}</Typography.Title>

      <Button
        onClick={handleReload}
        type="primary"
        style={{
          width: '100%',
        }}
      >
        {t('error-page.reload')}
      </Button>

      <Button
        onClick={handleGoBack}
        style={{
          width: '100%',
        }}
      >
        {t('error-page.back')}
      </Button>
    </Box>
  );
};

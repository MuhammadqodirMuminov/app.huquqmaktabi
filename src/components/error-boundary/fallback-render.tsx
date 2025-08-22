import { Button, Typography } from 'antd';
import { useQueryClient } from '@tanstack/react-query';

import { Box } from '../box';

export const fallbackRender = () => <FallbackRender />;

const FallbackRender = () => {
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
      <Typography.Title level={4}>{'Something went wrong!'}</Typography.Title>

      <Button
        onClick={handleReload}
        type="primary"
        style={{
          width: '100%',
        }}
      >
        Reload
      </Button>

      <Button
        onClick={handleGoBack}
        style={{
          width: '100%',
        }}
      >
        Back to main
      </Button>
    </Box>
  );
};

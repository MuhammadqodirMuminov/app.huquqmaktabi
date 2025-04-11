import { useEffect } from 'react';
import { Drawer, Typography } from 'antd';

import { Box } from '../box';
import { Icon, Icons } from '../icons';

import type { TDrawerProps } from '@/types/components';
import { useAppStore } from '@/store/app';

export const CustomDrawer = ({
  onClosing,
  children,
  isFull = false,
  isMap = false,
  isSearch = false,
  title = undefined,
  ...props
}: TDrawerProps) => {
  const { isDrawer, setIsDrawer } = useAppStore();

  const handleClose = () => {
    if (onClosing) {
      onClosing();
    }

    setIsDrawer(false);
  };

  useEffect(() => {
    return () => {
      setIsDrawer(false);
    };
  }, []);

  return (
    <Drawer
      placement="bottom"
      open={isDrawer}
      closable={false}
      onClose={handleClose}
      rootStyle={{ maxWidth: 600, margin: '0 auto' }}
      styles={{
        body: {
          padding: isMap ? 0 : 16,
        },
        content: {
          borderTopLeftRadius: isFull ? 0 : 16,
          borderTopRightRadius: isFull ? 0 : 16,
          maxHeight: isFull ? '100vh' : '95vh',
          minHeight: isFull ? '100vh' : '20vh',
        },
        header: {
          border: 'none',
          background: isFull ? '#FFF' : '#F4F4F4',
          padding: 16,
          paddingBottom: isSearch ? 0 : 16,
        },
        footer: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          border: 'none',
          padding: 16,
          paddingBottom: 'var(--2xl)',
        },
        wrapper: {
          height: 'auto',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
      }}
      title={
        typeof title === 'string' ? (
          isFull ? (
            <Box $align="center" $sx={{ position: 'relative' }}>
              <Icon
                as={Icons.X}
                $stroke="#7f7f7f"
                onClick={props.onClose || handleClose}
              />

              <Box
                $sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Box as={Typography} $sx={{ fontSize: 16, fontWeight: 600 }}>
                  {title}
                </Box>
              </Box>
            </Box>
          ) : (
            <Box $align="center" $justify="space-between">
              <Box as={Typography} $sx={{ fontSize: 16, fontWeight: 600 }}>
                {title}
              </Box>

              <Icon as={Icons.Close} onClick={props.onClose || handleClose} />
            </Box>
          )
        ) : (
          title
        )
      }
      {...props}
    >
      {children}
    </Drawer>
  );
};

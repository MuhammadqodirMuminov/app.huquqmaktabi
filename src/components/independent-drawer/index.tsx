import { Slot } from '@radix-ui/react-slot';
import { Button, Drawer, Typography } from 'antd';
import {
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '../box';
import { Icon, Icons } from '../icons';

interface Properties {
  trigger: ReactNode;
  title: ReactNode;
  isFull?: boolean;
  drawerProps?: Omit<
    ComponentPropsWithoutRef<typeof Drawer>,
    'open' | 'onClose' | 'title'
  >;
  open?: boolean;
  noPadding?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeButton?: boolean;
  hideHeader?: boolean;
  square?: boolean;
  maxHeight?: string;
}

const IndependentDrawer: FC<PropsWithChildren<Properties>> = ({
  trigger,
  children,
  drawerProps,
  title,
  isFull = false,
  onOpenChange,
  open,
  noPadding,
  closeButton = false,
  hideHeader = false,
  square = false,
  maxHeight = '95vh',
}) => {
  const [t] = useTranslation('common');

  const [internalOpen, setInternalOpen] = useState(false);
  const realOpen = open ?? internalOpen;

  const handleTriggerClick = () => {
    setInternalOpen(true);
    onOpenChange?.(true);
  };

  const handleClose = () => {
    setInternalOpen(false);
    onOpenChange?.(false);
  };

  // console.log('render');

  // useEffect(() => {
  //   console.log('relOpen changed');

  //   if (realOpen && window.history.state.open !== true) {
  //     console.log('push');

  //     window.history.pushState(
  //       {
  //         open: true,
  //       },
  //       '',
  //       window.location.href,
  //     );
  //   }

  //   if (!realOpen && window.history.state.open === true) {
  //     console.log('back');

  //     window.history.back();
  //   }
  // }, [realOpen]);

  // useEffect(() => {
  //   history.listen(({ action }) => {
  //     console.log(action);

  //     if (action === Action.Pop) handleClose();
  //   });
  // }, []);

  return (
    <>
      <Slot onClick={handleTriggerClick}>{trigger}</Slot>

      <Drawer
        open={realOpen}
        onClose={handleClose}
        {...drawerProps}
        placement={drawerProps?.placement ?? 'bottom'}
        closable={drawerProps?.closable ?? false}
        rootStyle={{ maxWidth: 600, margin: '0 auto' }}
        footer={
          drawerProps?.footer ??
          (closeButton && (
            <Button block type="primary" onClick={handleClose}>
              {t('close')}
            </Button>
          ))
        }
        styles={{
          content: {
            borderTopLeftRadius: square ? 0 : isFull ? 0 : 16,
            borderTopRightRadius: square ? 0 : isFull ? 0 : 16,
            maxHeight: isFull ? '100vh' : maxHeight,
            minHeight: isFull ? '100vh' : '20vh',
          },
          body: {
            padding: noPadding ? 0 : '20px 16px',
          },
          header: {
            border: 'none',
            background: isFull ? '#FFF' : '#F4F4F4',
            padding: 16,
            paddingBottom: 16,
            display: hideHeader ? 'none' : undefined,
          },
          footer: {
            borderTopLeftRadius: square ? 0 : 16,
            borderTopRightRadius: square ? 0 : 16,
            border: 'none',
            padding: 16,
            paddingBottom: 'var(--2xl)',
          },
          wrapper: {
            height: 'auto',
            borderTopLeftRadius: square ? 0 : 16,
            borderTopRightRadius: square ? 0 : 16,
          },
        }}
        title={
          typeof title === 'string' ? (
            isFull ? (
              <Box $align="center" $sx={{ position: 'relative' }}>
                <Icon as={Icons.X} $stroke="#7f7f7f" onClick={handleClose} />

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

                <Icon as={Icons.Close} onClick={handleClose} />
              </Box>
            )
          ) : (
            title
          )
        }
      >
        {children}
      </Drawer>
    </>
  );
};

export default IndependentDrawer;

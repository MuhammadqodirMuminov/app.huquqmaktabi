import { Typography } from 'antd';

import { Body, Content, Footer } from '../style';

import type { TWrapperProps } from '@/types/components';
import { Box, Icons } from '@/components';
import { history } from '@/utils/history';

export const Wrapper = ({
  onClickBack,
  bg = undefined,
  extraHeader = undefined,
  header = undefined,
  headerRight = undefined,
  hasBodyPadding = true,
  footer = undefined,
  navigation = false,
  title = undefined,
  footerStyle = undefined,
  children,
}: TWrapperProps) => {
  const handleBack = () => {
    if (onClickBack) {
      onClickBack();
    }

    if (window.history.length === 1) {
      history.replace('/');
    } else {
      history.back();
    }
  };

  return (
    <Content>
      {title ? (
        <Box
          $sx={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            boxShadow: !extraHeader
              ? '0px -4px 20px 0px rgba(0, 0, 0, 0.05)'
              : undefined,
          }}
        >
          <Box
            $align="center"
            $justify="center"
            $sx={{
              zIndex: 2,
              height: '100%',
              aspectRatio: '1 / 1',
            }}
            onClick={handleBack}
          >
            <Icons.Back
              style={{
                '--svg-color': '#9C9EAF',
              }}
            />
          </Box>

          {typeof title === 'string' ? (
            <Box
              as={Typography.Paragraph}
              $sx={{
                padding: 'var(--base) 0',
                textAlign: 'center',
                marginBottom: '0 !important',
                fontSize: 18,
                fontWeight: 600,
                lineHeight: '20px',
              }}
              ellipsis={{
                rows: 1,
              }}
            >
              {title}
            </Box>
          ) : (
            title
          )}

          <Box
            $align="center"
            $justify="center"
            $sx={{
              height: '100%',
              aspectRatio: '1 / 1',
            }}
          >
            {headerRight && headerRight}
          </Box>
        </Box>
      ) : (
        header
      )}
      {extraHeader && extraHeader}

      {children && (
        <Body $bg={bg} $hasPadding={hasBodyPadding} id="body">
          {children}
        </Body>
      )}



      {footer && (
        <Box as={Footer} $mt="auto" $sx={footerStyle}>
          {footer}
        </Box>
      )}
      {navigation && (
        <div>footer</div>
        // <Footer>
        //   <Navigation />
        // </Footer>
      )}
    </Content>
  );
};

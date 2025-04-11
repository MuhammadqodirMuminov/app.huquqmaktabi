import { Carousel as AntdCarousel, Typography } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import { Box } from '../box';
import { Icons } from '../icons';

import { TCarouselProps } from '@/types/components';

export const Carousel = ({
  additional,
  hasBack,
  length,
  children,
  ...props
}: TCarouselProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onChange = (currentSlide: number) => {
    setSlideIndex(currentSlide);
  };

  return (
    <Box $sx={{ position: 'relative', width: 'var(--full)' }} {...props}>
      <AntdCarousel autoplay infinite dots={false} afterChange={onChange}>
        {children}
      </AntdCarousel>

      {hasBack && (
        <Box
          $align="center"
          $bg="var(--white)"
          $justify="center"
          $height="40px"
          $rounded="var(--full)"
          $width="40px"
          $sx={{ position: 'absolute', left: 16, top: 16 }}
          onClick={() => history.back()}
        >
          <Icons.Back />
        </Box>
      )}

      {additional}
      <ImageCount>
        <Typography.Text>
          {slideIndex + 1} / {length}
        </Typography.Text>
      </ImageCount>
    </Box>
  );
};

const ImageCount = styled(Box).attrs(() => ({
  $bg: '#10131b80',
  $rounded: '4px',
  $p: '2px 6px',
  $direction: 'row',
  $align: 'center',
  $gap: '4px',
}))`
  position: absolute;
  bottom: 14px;
  right: 16px;

  span {
    color: var(--white);
  }
`;

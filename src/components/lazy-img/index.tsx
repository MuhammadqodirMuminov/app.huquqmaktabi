import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Box } from '../box';

import { TLazyImgProps } from '@/types/components';

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

export const LazyImg = ({ src, alt, ...props }: TLazyImgProps) => {
  return (
    <Box
      as={LazyLoadImage}
      src={src}
      alt={alt}
      placeholderSrc={PLACEHOLDER_SRC}
      wrapperProps={{
        style: { transitionDelay: '1s' },
      }}
      $sx={{
        objectFit: 'cover',
      }}
      {...props}
    />
  );
};

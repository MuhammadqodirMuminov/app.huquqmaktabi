import { Rate, theme } from 'antd';
import { ComponentProps } from 'react';

import { Icons } from '../icons';

const starSize = {
  small: 16,
  normal: 20,
  big: 48,
};

const CustomRate = ({
  defaultValue = 0,
  size = 'small',
  error = false,
  ...props
}: {
  defaultValue?: number;
  size?: keyof typeof starSize;
  error?: boolean;
} & ComponentProps<typeof Rate>) => {
  const { token } = theme.useToken();
  const color = error ? token.colorError : '#FFBE18';

  return (
    <Rate
      defaultValue={defaultValue}
      disabled
      rootClassName={error ? 'shake' : ''}
      character={({ index }) => (
        <Icons.Rate
          style={{
            '--svg-color':
              (index ?? 0) < (props?.value ?? defaultValue) ? color : 'none',
            stroke:
              (index ?? 0) < (props?.value ?? defaultValue) ? color : '#9C9EAF',
            width: starSize[size],
            height: starSize[size],
            marginLeft: size === 'big' ? 4 : 0,
          }}
        />
      )}
      {...props}
    />
  );
};

export default CustomRate;

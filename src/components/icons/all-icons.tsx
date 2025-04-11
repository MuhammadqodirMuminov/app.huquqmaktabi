import { FC } from 'react';

import { Box } from '../box';
import { Icons } from './icons';
import { Icon } from './style';

interface Properties {}

const AllIcons: FC<Properties> = () => {
  return (
    <Box
      $sx={{
        background: '#ccc',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 50px)',
        gridAutoRows: '1fr',
        gap: 5,
        width: '100%',
      }}
    >
      {Object.entries(Icons).map(([key, value]) => (
        <Box
          key={key}
          $sx={{
            display: 'grid',
            alignContent: 'start',
            justifyItems: 'center',
          }}
        >
          <Box
            $sx={{
              width: '100%',
              aspectRatio: '1 / 1',
            }}
          >
            <Icon as={value} $width="100%" $height="100%" />
          </Box>

          <Box $sx={{ wordBreak: 'break-all' }}>{key}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default AllIcons;

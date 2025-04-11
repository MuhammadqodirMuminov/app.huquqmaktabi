import { FC } from 'react';

import { Box } from '../box';
import { Icon, Icons } from '../icons';

interface Properties {
  icon: keyof typeof Icons;
  color: 'success' | 'warning';
  header: string;
  desc: string;
  onClick?: () => void;
}

const Info: FC<Properties> = ({ icon, color, desc, header, onClick }) => {
  return (
    <Box
      $sx={{
        display: 'grid',
        gridTemplateColumns: '40px 1fr 24px',
        alignItems: 'center',
        gap: 10,
      }}
      onClick={onClick}
    >
      <Box
        $sx={{
          background: `var(--${color}-bg)`,
          '--svg-color': `var(--${color})`,
          padding: 10,
          borderRadius: '6px',
          aspectRatio: '1 / 1',
          height: '40px',
          width: '100%',
        }}
      >
        <Icon as={Icons[icon]} $width={'20px'} $height={'20px'} />
      </Box>

      <Box>
        <Box
          $sx={{
            fontSize: 14,
            fontWeight: 500,
          }}
          as={'p'}
        >
          {header}
        </Box>

        <Box
          $sx={{
            fontSize: 12,
            color: '#3A3A3A',
          }}
          as={'p'}
        >
          {desc}
        </Box>
      </Box>

      <Icon
        as={Icons.Information}
        $width={'20px'}
        $height={'20px'}
        style={{
          '--svg-color': '#9C9EAF',
        }}
      />
    </Box>
  );
};

export default Info;

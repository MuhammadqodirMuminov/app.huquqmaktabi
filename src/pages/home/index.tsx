import { LegalFieldItem } from './common';
import { MockLawField } from './constants';

import { Wrapper } from '@/modules';
import { Box } from '@/components';

const Home = () => {
  return (
    <Wrapper hasBodyPadding={false} bg="#f7f7f7">
      <Box
        $align="center"
        $direction="column"
        $gap="var(--base)"
        $mt="20px"
        $sx={{ padding: '0px 10px' }}
      >
        {MockLawField.map((item) => (
          <LegalFieldItem key={item.id} {...item} />
        ))}
      </Box>
    </Wrapper>
  );
};

export default Home;

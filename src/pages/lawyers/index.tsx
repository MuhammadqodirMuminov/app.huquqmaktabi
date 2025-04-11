import { Back, Box } from '@/components';
import { Wrapper } from '@/modules';
import { Row } from 'antd';
import { LawyersMockData } from './constants';
import { LawyersCard } from './components';

const Lawyers = () => {
  return (
    <Wrapper hasBodyPadding={false} bg="#f7f7f7">
      <Box
        $bg="var(--white)"
        $sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
      >
        <Back label={'Yuridik Sohalar'} />
      </Box>
      <Row style={{ margin: '10px' }} gutter={[16, 16]}>
        {LawyersMockData.map((item) => (
          <LawyersCard key={item.id} {...item} />
        ))}
      </Row>
    </Wrapper>
  );
};

export default Lawyers;

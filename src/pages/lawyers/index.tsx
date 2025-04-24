import { Row } from 'antd';

import { LawyersCard } from './components';
import { LawyersMockData } from './constants';

import { Wrapper } from '@/modules';

const Lawyers = () => {
  return (
    <Wrapper hasBodyPadding={false} bg="#f7f7f7">
      <Row style={{ margin: 8 }} gutter={[8, 8]}>
        {LawyersMockData.map((item) => (
          <LawyersCard key={item.id} {...item} />
        ))}
      </Row>
    </Wrapper>
  );
};

export default Lawyers;

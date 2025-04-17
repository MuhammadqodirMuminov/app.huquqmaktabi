import { Card } from '@/components';
import { ROUTES } from '@/constants';
import { getRoute } from '@/utils/general';
import { history } from '@/utils/history';
import { Col, Typography } from 'antd';

export type LawyersCardProps = {
  id: number;
  image: string;
  fullName: string;
  position: string;
  experience?: string;
};

const LawyersCard = (item: LawyersCardProps) => {
  return (
    <Col span={12}>
      <Card
        $direction="column"
        $bg="var(--white)"
        $gap="var(--base)"
        $sx={{
          borderRadius: 16,
        }}
        $align="center"
        onClick={() => history.push(getRoute(ROUTES.lawyers, `${item.id}`))}
      >
        <img
          src={item.image}
          width={90}
          height={90}
          style={{
            borderRadius: 50,
          }}
        />
        <Typography.Title
          style={{ fontSize: 18, textAlign: 'center', height: 40 }}
        >
          {item.fullName}
        </Typography.Title>
        <Typography.Text style={{ textAlign: 'center' }}>
          {item.position}
        </Typography.Text>
      </Card>
    </Col>
  );
};

export default LawyersCard;

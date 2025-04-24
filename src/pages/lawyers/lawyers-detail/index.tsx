import { Typography } from 'antd';
import { useParams } from 'react-router-dom';

import { LawyersMockData } from '../constants';

import { Box } from '@/components';
import { Wrapper } from '@/modules';

const LawyersDetail = () => {
  const { id } = useParams();
  const user = LawyersMockData.find((item) => item.id === Number(id));

  return (
    <Wrapper hasBodyPadding={false} bg="#f7f7f7">
      <Box
        $bg="var(--white)"
        $direction="column"
        $gap="20px"
        $m="10px"
        $sx={{ borderRadius: 16 }}
      >
        <Box
          $align="center"
          $direction="column"
          $gap="15px"
          $justify="center"
          $p="10px"
        >
          <img
            src={user?.image}
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
            }}
          />
          <Typography.Title style={{ fontSize: 25, textAlign: 'center' }}>
            {user?.fullName}
          </Typography.Title>
          <Typography.Text style={{ textAlign: 'center' }}>
            {user?.position}
          </Typography.Text>
        </Box>
        <Box
          $p="10px"
          dangerouslySetInnerHTML={{
            __html: user?.experience as string,
          }}
        ></Box>
      </Box>
    </Wrapper>
  );
};

export default LawyersDetail;

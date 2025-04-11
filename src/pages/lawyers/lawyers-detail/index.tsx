import { Back, Box } from '@/components';
import { Wrapper } from '@/modules';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { LawyerTabs } from '../components';

const LawyersDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Wrapper
      hasBodyPadding={false}
      bg="#f7f7f7"
      header={
        <Box
          $bg="var(--white)"
          $sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
        >
          <Back label={'Yuridik Sohalar'} />
        </Box>
      }
    >
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
            src="https://api.huquqmaktabi.uz/uploads/g8efc4ef72a96f29f1eb36da665d735c-blogpost.jpg"
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
            }}
          />
          <Typography.Title style={{ fontSize: 25, textAlign: 'center' }}>
            Muhammadqodir Muminov
          </Typography.Title>
          <Typography.Text style={{ textAlign: 'center' }}>
            Software enganer, fullstack developer
          </Typography.Text>
        </Box>
        <Box>
          <LawyerTabs />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default LawyersDetail;

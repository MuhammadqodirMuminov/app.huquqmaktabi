import { Back, Box } from '@/components';
import { Wrapper } from '@/modules';
import { useParams } from 'react-router-dom';

const LawyersDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Wrapper hasBodyPadding={false} bg="#f7f7f7">
      <Box
        $bg="var(--white)"
        $sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
      >
        <Back label={'Yuridik Sohalar'} />
      </Box>
      Detail page will be appear here
    </Wrapper>
  );
};

export default LawyersDetail;

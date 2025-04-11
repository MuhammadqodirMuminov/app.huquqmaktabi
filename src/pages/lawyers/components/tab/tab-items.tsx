import { Box, Card } from '@/components';
import { Typography } from 'antd';

export const LawyerTab1 = () => {
  return (
    <Box $p="20px">
      <b>Akademik Hojiakbar Rahmonqulov</b> Oʻzbekiston huquqshunoslik sohasida
      ulkan hissa qoʻshgan taniqli olimlardan biri boʻlib, 1925-yil 9-fevralda
      <b>Chimkent viloyati, Sayram tumanida</b> tugʻilgan va 2013-yil 17-iyulda
      vafot etgan. 1950-yilda Toshkent yuridik institutini tamomlaganidan soʻng,
      Oʻzbekiston Adliya vazirligida katta taftishchi sifatida faoliyatini
      boshlagan
    </Box>
  );
};

export const LawyerTab2 = () => {
  return (
    <Box>
      {[1, 1, 1].map((_, i) => {
        return (
          <Card
            $mt="10px"
            $mb="10px"
            $p="10px"
            key={i}
            $direction="row"
            $bg="var(--white)"
            $gap="var(--base)"
            $sx={{
              borderRadius: 16,
              maxWidth: 500,
              width: '100%',
              boxShadow: '2px 2px 4px 1px rgba(0,0,0,0.12)',
            }}
            $align="center"
          >
            <img
              src="https://api.huquqmaktabi.uz/uploads/g8efc4ef72a96f29f1eb36da665d735c-blogpost.jpg"
              width={70}
              height={70}
              style={{
                borderRadius: 15,
              }}
            />
            <Typography>
              Oʻzbekiston Adliya vazirligida katta taftishchi sifatida
              faoliyatini boshlagan
            </Typography>
          </Card>
        );
      })}
    </Box>
  );
};

export const LawyerTab3 = () => {
  return (
    <Box>
      {[1, 1, 1].map((_, i) => {
        return (
          <Card
            $mt="10px"
            $mb="10px"
            $p="10px"
            key={i}
            $direction="row"
            $bg="var(--white)"
            $gap="var(--base)"
            $sx={{
              borderRadius: 16,
              maxWidth: 500,
              width: '100%',
              boxShadow: '2px 2px 4px 1px rgba(0,0,0,0.12)',
            }}
            $align="center"
          >
            <img
              src="https://api.huquqmaktabi.uz/uploads/g8efc4ef72a96f29f1eb36da665d735c-blogpost.jpg"
              width={70}
              height={70}
              style={{
                borderRadius: 15,
              }}
            />
            <Typography>
              60 dan ortiq monografiya va darsliklar, 300 dan ortiq ilmiy
              maqolala
            </Typography>
          </Card>
        );
      })}
    </Box>
  );
};

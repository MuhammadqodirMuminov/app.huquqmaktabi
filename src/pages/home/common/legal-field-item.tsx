import { Card } from '@/components';
import { history } from '@/utils/history';
import { Typography } from 'antd';

type Props = {
  id: number;
  title: string;
  image: string;
  route: string;
};

export const LegalFieldItem = (item: Props) => {
  return (
    <Card
      key={item.id}
      $direction="row"
      $bg="var(--white)"
      $gap="var(--base)"
      $sx={{
        borderRadius: 16,
        maxWidth: 570,
        width: '100%',
      }}
      $align="center"
      onClick={() => history.push(item.route)}
    >
      <img
        src={item.image}
        width={90}
        height={90}
        style={{
          borderRadius: 15,
        }}
      />
      <Typography>{item.title}</Typography>
    </Card>
  );
};

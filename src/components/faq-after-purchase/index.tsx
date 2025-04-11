import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import { ReactNode } from 'react';

import IndependentDrawer from '../independent-drawer';

import { Box } from '@/components';

export const FaqAfterPurchase = ({ trigger }: { trigger: ReactNode }) => {
  const { t } = useTranslation('tours', { keyPrefix: 'faq' });

  const list: {
    header: string;
    list: {
      text: string;
      link?: string;
      subHeader?: string;
      content?: ReactNode;
    }[];
  }[] = [
    {
      header: '0.header',
      list: [
        {
          text: '0.list.0',
        },
        {
          text: '0.list.1',
        },
      ],
    },
    {
      header: '1.header',
      list: [
        {
          text: '1.list.0',
        },
        {
          text: '1.list.1',
        },
      ],
    },
    {
      header: '3.header',
      list: [
        {
          text: '3.list.0',
        },
      ],
    },
    {
      header: '4.header',
      list: [
        {
          text: '4.list.0',
        },
        {
          text: '4.list.1',
        },
      ],
    },
  ];

  return (
    <IndependentDrawer trigger={trigger} title={''} noPadding isFull>
      {list.map(({ header, list }, i) => (
        <Box
          key={i}
          $direction="column"
          $gap="var(--base)"
          $m="var(--base)"
          $mt="0"
        >
          <Box>
            <Typography.Title style={{ marginBottom: 8 }} level={4}>
              {t(header)}
            </Typography.Title>

            {list.map(
              ({ text, subHeader, link, content }, i) =>
                content ?? (
                  <Box
                    key={i}
                    as={link ? 'a' : Typography.Paragraph}
                    href={`${link}:${text?.replace(/\s/g, '')}`}
                    $sx={{
                      display: 'block',
                      lineHeight: 1.5,
                      marginBottom: 2,
                      fontSize: t(text) ? 16 : 14,
                      marginTop: !t(text) ? 16 : 0,
                      color: t(text) ? '#000' : '#3a3a3a',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {t(text ?? subHeader)}
                  </Box>
                ),
            )}
          </Box>
        </Box>
      ))}
    </IndependentDrawer>
  );
};

export default FaqAfterPurchase;

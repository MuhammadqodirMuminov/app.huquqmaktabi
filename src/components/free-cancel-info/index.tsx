import { Alert } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

type Props = {
  date?: string;
};

export const FreeCancelInfo = ({ date }: Props) => {
  const { t } = useTranslation('translation');

  return (
    <Alert
      description={t('free-cancel-info' + (date ? '-date' : ''), {
        date: dayjs(date).format('D MMMM HH:mm [(]Z[)]'),
      })}
      type="info"
      showIcon
    />
  );
};

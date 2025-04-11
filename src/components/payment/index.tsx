import { Radio, Space, Typography } from 'antd';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Field } from '../fields';
import { Box } from '../box';
import { Icon, Icons } from '../icons';

export const PaymentMethod = () => {
  const { t } = useTranslation('translation');
  const { t: tErr } = useTranslation('errors');

  return (
    <Field
      name="paymentType"
      label={t('payment.method')}
      rule={[{ required: true, message: tErr('form.payment-method.required') }]}
    >
      <RadioGroup>
        <Space direction="vertical">
          <Radio value="CARD">
            <Box $align="center" $gap="8px">
              <Icon as={Icons.Card} />

              <Typography>{t('payment.card')}</Typography>
            </Box>
          </Radio>

          <Radio value="CASH">
            <Box $align="center" $gap="8px">
              <Icon as={Icons.Cash} />

              <Typography>{t('payment.cash')}</Typography>
            </Box>
          </Radio>
        </Space>
      </RadioGroup>
    </Field>
  );
};

const RadioGroup = styled(Radio.Group)`
  width: var(--full);

  .ant-radio-wrapper {
    width: var(--full);
    flex-direction: row-reverse;
    align-items: center;

    --border-color: #ebedfa;
    border-radius: var(--ss);
    border: 1px solid var(--border-color);
    padding: var(--lg) var(--xs);

    span:nth-of-type(2) {
      width: var(--full);
    }

    &:has(.ant-radio-checked) {
      --border-color: ${({ theme }) => theme.primary};
      outline: 1px solid var(--border-color);
    }
  }
`;

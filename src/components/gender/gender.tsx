import { useTranslation } from 'react-i18next';
import { Radio } from 'antd';

import { Field } from '../fields';

export const Gender = ({ isRequired = true }: { isRequired?: boolean }) => {
  const { t } = useTranslation('auth');
  const { t: tErr } = useTranslation('errors');

  return (
    <Field
      name="gender"
      label={t('labels[5]')}
      isRequired={isRequired}
      rule={
        isRequired
          ? [{ required: true, message: tErr('form.gender.required') }]
          : undefined
      }
    >
      <Radio.Group
        options={[
          { label: t('labels[6]'), value: 'MALE' },
          { label: t('labels[7]'), value: 'FEMALE' },
        ]}
      />
    </Field>
  );
};

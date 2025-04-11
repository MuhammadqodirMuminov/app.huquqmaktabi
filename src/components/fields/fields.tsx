import { useTranslation } from 'react-i18next';
import FormItem from 'antd/es/form/FormItem';
import PhoneInput from 'antd-phone-input';
import { DatePicker, DatePickerProps, Input, Select } from 'antd';
import { ComponentProps } from 'react';

import { FieldWrapper } from './style';

import type { TFieldProps, TFieldWrapperProps } from '@/types/components';
import { useAuthStore } from '@/store/auth';
import { disabledDate } from '@/utils/general';

export const Field = ({
  rule,
  isFilled = false,
  isPassword = false,
  isRequired,
  children,
  ...props
}: TFieldProps) => {
  const { t } = useTranslation('auth');

  return (
    <FormItem
      rules={[
        ...(rule?.some((it) => 'required' in it)
          ? []
          : [
              {
                required: isRequired ?? true,
                message: t('errorMessages[0]'),
              },
            ]),
        ...(rule ? rule : []),
      ]}
      {...props}
    >
      {children ? (
        children
      ) : isPassword ? (
        <Input.Password variant="filled" {...props} />
      ) : (
        <Input variant="filled" {...props} />
      )}
    </FormItem>
  );
};

export const FieldWithIcon = ({
  prefixIcon,
  children = undefined,
  ...props
}: TFieldWrapperProps) => (
  <FieldWrapper>
    <div className="prefix-icon-wrapper">{prefixIcon}</div>
    {children ? (
      children
    ) : (
      <Select {...props} variant="filled" style={{ width: 'var(--full)' }} />
    )}
  </FieldWrapper>
);

export const PhoneNumberField = ({
  placeholder,
}: {
  required?: boolean;
  placeholder?: string;
}) => {
  const { t } = useTranslation('profile', { keyPrefix: 'info' });
  const { t: tErr } = useTranslation('errors');
  const { user } = useAuthStore();

  return (
    <FormItem
      label={placeholder ? '' : t('labels[2]')}
      initialValue={user?.phoneNumber ? user.phoneNumber : ''}
      name="phoneNumber"
      rules={[
        {
          validator: (_, { valid }) => {
            if (valid()) return Promise.resolve();
            return Promise.reject(tErr('form.number.invalid'));
          },
        },
      ]}
    >
      <PhoneInput enableSearch variant="filled" />
    </FormItem>
  );
};

export const DateField = ({ ...props }: DatePickerProps) => (
  <DatePicker
    disabledDate={disabledDate}
    inputReadOnly
    placeholder=""
    showNow={false}
    variant="filled"
    {...props}
  />
);

export const RangeField = ({
  ...props
}: ComponentProps<typeof DatePicker.RangePicker>) => (
  <DatePicker.RangePicker
    disabledDate={disabledDate}
    inputReadOnly
    showNow={false}
    variant="filled"
    {...props}
  />
);

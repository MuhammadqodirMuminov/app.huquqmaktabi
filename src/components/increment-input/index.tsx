import { Button, Form, theme } from 'antd';
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import { Box } from '../box';
import { Icon, Icons } from '../icons';

type Properties = {
  onChange?: (value?: number) => void;
  label: string;
  desc?: string;
  value?: number;
  min?: number;
  max?: number;
  right?: (value?: number) => React.ReactNode;
} & Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'onChange' | 'value' | 'min'
>;

const inputValueToNumber = (
  value: ComponentPropsWithoutRef<'input'>['value'],
) => (value ? Number(value) : undefined);

const IncrementInput = forwardRef<HTMLInputElement, Properties>(
  (
    {
      className,
      value: externalValue,
      onChange,
      label,
      desc,
      defaultValue,
      min,
      max,
      right,
      ...props
    },
    ref,
  ) => {
    const { token } = theme.useToken();

    const [internalValue, setInternalValue] = useState(
      inputValueToNumber(externalValue) ??
        inputValueToNumber(defaultValue) ??
        0,
    );
    const value = externalValue ?? internalValue;

    const [updating, setUpdating] = useState(false);
    const { errors, status } = Form.Item.useStatus();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInternalValue(inputValueToNumber(e.target.value) ?? 0);
      setUpdating(true);
    };

    const handleIncrease = () => {
      setInternalValue((prev) => (prev < (max ?? 0) ? prev + 1 : (max ?? 0)));
      setUpdating(true);
    };

    const handleDecrease = () => {
      setInternalValue((prev) => (prev > (min ?? 1) ? prev - 1 : (min ?? 0)));
      setUpdating(true);
    };

    useEffect(() => {
      if (onChange && updating) {
        onChange(internalValue);
      }

      setUpdating(false);
    }, [onChange, internalValue]);

    return (
      <Box>
        <Box
          ref={ref}
          $sx={{
            display: 'grid',
            gridTemplateColumns: right ? '11fr 12fr 11fr' : '1fr auto',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Box>
            <Box>
              <Box
                $sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: status === 'error' ? token.colorError : undefined,
                }}
                as={'p'}
              >
                {label}
              </Box>

              {!!desc && (
                <Box
                  $sx={{
                    fontSize: '12px',
                    color:
                      status === 'error' ? token.colorErrorActive : '#3a3a3a',
                  }}
                  as={'p'}
                >
                  {desc}
                </Box>
              )}
            </Box>
          </Box>

          <Box $align="center" $gap="10px">
            <input
              type="number"
              className={`${className} visually-hidden`}
              value={value}
              onChange={handleChange}
              {...props}
            />

            <Box
              as={Button}
              onClick={handleDecrease}
              $sx={{
                display: 'flex',
                padding: 8,
                borderRadius: '50%',
                height: 'auto',
                background: '#EBEDFA',
                '--svg-color': '#9C9EAF',
              }}
            >
              <Icon as={Icons.Minus} $width="20px" $height="20px" />
            </Box>

            <Box
              $sx={{
                margin: '0 auto',
                fontSize: '16px',
                fontWeight: '600',
                textAlign: 'center',
                minWidth: '30px',
                color: status === 'error' ? token.colorError : undefined,
              }}
            >
              {value}
            </Box>

            <Box
              as={Button}
              onClick={handleIncrease}
              $sx={{
                display: 'flex',
                padding: 8,
                borderRadius: '50%',
                height: 'auto',
                background: '#EBEDFA',
                '--svg-color': 'var(--primary)',
              }}
            >
              <Icon as={Icons.Plus} $width="20px" $height="20px" />
            </Box>
          </Box>

          {right?.(value)}
        </Box>

        <Box $sx={{ color: token.colorError }}>{errors}</Box>
      </Box>
    );
  },
);

export default IncrementInput;

import { Select, Spin } from 'antd';

import { Icon, Icons } from '../icons';

import type { TCustomAutocomplete } from '@/types/components';
import { debounce } from '@/utils/general';

export const CustomAutocomplete = ({
  setValue,
  isLoading = false,
  ...props
}: TCustomAutocomplete) => {
  const onSearch = debounce(setValue, 300);

  return (
    <Select
      allowClear={{
        clearIcon: (
          <Icon
            as={Icons.Close}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        ),
      }}
      defaultActiveFirstOption={false}
      value={'6'}
      notFoundContent={null}
      onSearch={onSearch}
      optionFilterProp="label"
      showSearch
      suffixIcon={isLoading && <Spin size="small" spinning={true} />}
      variant="filled"
      {...props}
    />
  );
};

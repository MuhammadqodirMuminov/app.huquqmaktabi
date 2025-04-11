import { Pagination, PaginationProps } from 'antd';

import { Box } from '../box';

import type { TPaginationProps } from '@/types/components';
import { setBodyToTop } from '@/utils/general';

export const Paginator = ({
  current,
  total,
  size,
  onChangePage,
}: TPaginationProps) => {
  const handlePageChange: PaginationProps['onChange'] = (page) => {
    setBodyToTop();
    onChangePage(page - 1);
  };

  return (
    <Box
      as={Pagination}
      $justify="center"
      current={Number(current) + 1}
      total={total}
      pageSize={size || 10}
      responsive
      showSizeChanger={false}
      onChange={handlePageChange}
    />
  );
};

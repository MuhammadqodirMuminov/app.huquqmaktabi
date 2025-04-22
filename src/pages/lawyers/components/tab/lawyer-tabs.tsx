import { Tabs } from 'antd';

import { LawyerItems } from '../../constants';
import { LawyersCardProps } from '../lawyers-card';

import { Box } from '@/components';

const LawyerTabs = (user: LawyersCardProps) => {
  return (
    <Box $align="center" $justify="center">
      <Tabs defaultActiveKey="1" centered items={LawyerItems(user)} />
    </Box>
  );
};

export default LawyerTabs;

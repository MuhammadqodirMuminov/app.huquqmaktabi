import { Tabs } from 'antd';
import { LawyerItems } from '../../constants';
import { Box } from '@/components';
import { LawyersCardProps } from '../lawyers-card';

const LawyerTabs = (user: LawyersCardProps) => {
  return (
    <Box $align="center" $justify="center">
      <Tabs defaultActiveKey="1" centered items={LawyerItems(user)} />
    </Box>
  );
};

export default LawyerTabs;

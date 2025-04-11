import { Tabs } from 'antd';
import { LawyerItems } from '../../constants';
import { Box } from '@/components';

const LawyerTabs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Box $align="center" $justify="center">
      <Tabs
        defaultActiveKey="1"
        centered
        items={LawyerItems}
        onChange={onChange}
      />
    </Box>
  );
};

export default LawyerTabs;

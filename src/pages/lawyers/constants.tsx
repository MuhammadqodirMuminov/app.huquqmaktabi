import { LawyerTab1, LawyerTab2, LawyerTab3 } from './components/tab/tab-items';
import { TabsProps } from 'antd';

export const LawyersMockData = [
  {
    id: 1,

    image:
      'https://api.huquqmaktabi.uz/uploads/g8efc4ef72a96f29f1eb36da665d735c-blogpost.jpg',
    fullName: 'Muhammadqodir Mominov',
    position: 'Academic, yuridik fanlari doctori',
  },
  {
    id: 2,

    image:
      'https://api.huquqmaktabi.uz/uploads/g8efc4ef72a96f29f1eb36da665d735c-blogpost.jpg',
    fullName: 'Muhammadqodir Mominov',
    position: 'Academic, yuridik fanlari doctori',
  },
  {
    id: 3,

    image:
      'https://api.huquqmaktabi.uz/uploads/g8efc4ef72a96f29f1eb36da665d735c-blogpost.jpg',
    fullName: 'Muhammadqodir Mominov',
    position: 'Academic, yuridik fanlari doctori',
  },
  {
    id: 4,

    image:
      'https://api.huquqmaktabi.uz/uploads/g8efc4ef72a96f29f1eb36da665d735c-blogpost.jpg',
    fullName: 'Muhammadqodir Mominov',
    position: 'Academic, yuridik fanlari doctori',
  },
];

export const LawyerItems: TabsProps['items'] = [
  {
    key: '1',
    label: 'Hayoti',
    children: <LawyerTab1 />,
  },
  {
    key: '2',
    label: 'Faoliyati',
    children: <LawyerTab2 />,
  },
  {
    key: '3',
    label: 'Ilmiy ishlari',
    children: <LawyerTab3 />,
  },
];

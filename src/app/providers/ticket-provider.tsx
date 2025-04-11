import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            lineHeight: 1,
            lineHeightHeading1: 1,
            lineHeightHeading2: 1,
            lineHeightHeading3: 1,
            lineHeightHeading4: 1,
            lineHeightHeading5: 1,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

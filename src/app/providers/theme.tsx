import type { PropsWithChildren } from 'react';
import type { MessageInstance } from 'antd/es/message/interface';
import type { HookAPI } from 'antd/es/modal/useModal';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { ConfigProvider, Empty, Modal, message as antMessage } from 'antd';
import ru from 'antd/locale/ru_RU';
import en from 'antd/locale/en_GB';
import fr from 'antd/locale/fr_FR';
// import tr from 'antd/locale/tr_TR';
import uz from 'antd/locale/uz_UZ';

import { GlobalStyles, antTheme, colors } from '@/styles';
import { useAppStore } from '@/store/app';

let modal: HookAPI;
let message: MessageInstance;

export const Theme = ({ children }: PropsWithChildren) => {
  const { lang } = useAppStore();
  const [modalApi, modalContextHolder] = Modal.useModal();
  const [messageApi, messageContextHolder] = antMessage.useMessage({
    maxCount: 1,
  });

  modal = modalApi;
  message = messageApi;

  const getRootElement = () => document.getElementById('root');

  const getPopupContainer = (triggerNode?: HTMLElement) =>
    (triggerNode?.closest('.ant-modal-content') as HTMLElement) ||
    (getRootElement() as HTMLElement);

  const antdLanguages = {
    en,
    fr,
    ru,
    uz,
  };

  return (
    <StyledProvider theme={colors}>
      <GlobalStyles />

      <ConfigProvider
        csp={{ nonce: 'lets-trip' }}
        componentSize="large"
        locale={antdLanguages[lang as keyof typeof antdLanguages]}
        getPopupContainer={getPopupContainer}
        renderEmpty={() => (
          <Empty description="no data" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        theme={antTheme}
      >
        {modalContextHolder}
        {messageContextHolder}

        {children}
      </ConfigProvider>
    </StyledProvider>
  );
};

export { modal, message };

import styled from 'styled-components';
import Div100vh from 'react-div-100vh';

import { Container } from '@/components';

export const Content = styled(Div100vh)`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
`;

export const Header = styled.header<{ $hasShadow: boolean }>`
  align-items: center;
  box-shadow: ${({ $hasShadow }) =>
    $hasShadow && '0px -4px 20px 0px rgba(0, 0, 0, 0.05)'};
  display: flex;
  gap: var(--sm);
  justify-content: space-between;
  padding: var(--base);
  position: relative;
`;

export const Body = styled.section<{ $bg?: string; $hasPadding: boolean }>`
  background: ${({ $bg }) => $bg};
  flex: 1;
  overflow-y: auto;
  padding: ${({ $hasPadding }) => $hasPadding && 'var(--base)'};
`;

export const Footer = styled.footer`
  background: var(--white);
  box-shadow: 0px -3px 3px 0px rgba(0, 0, 0, 0.02);
  padding: var(--base);
  padding-bottom: var(--xl);
`;

export const Label = styled.p<{ $active: boolean }>`
  color: ${({ $active, theme }) => ($active ? theme.primary : theme.gray[400])};
  font-size: var(--xs);
`;

export const Main = styled(Container).attrs(() => ({
  as: 'main',
}))`
  left: 0;
  height: var(--full);
  position: fixed;
  right: 0;
`;

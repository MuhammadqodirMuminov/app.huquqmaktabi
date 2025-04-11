import { ThemeConfig } from 'antd/es/config-provider/context';

import { colors } from './colors';

const controlHeightLG = 48;

export const token: ThemeConfig['token'] = {
  colorPrimary: colors.primary,
  borderRadius: 10,
  colorPrimaryBgHover: colors.blue[100],
  fontFamily: `'SF Pro Display',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'`,
};

export const components: ThemeConfig['components'] = {
  Button: {
    controlHeightLG,
    defaultBg: colors.blue[100],
    defaultBorderColor: 'none',
    defaultColor: colors.primary,
    contentLineHeightLG: 1.42875,
    fontWeight: 500,
    contentFontSizeLG: 14,
    paddingBlockLG: 14,
    paddingInlineLG: 10,
  },

  Card: {
    headerFontSize: 20,
    paddingLG: 12,
  },

  Checkbox: {
    controlInteractiveSize: 20,
  },

  Collapse: {
    contentBg: '#fff',
    headerBg: '#fff',
  },

  DatePicker: {
    controlHeightLG,
    padding: 12,
  },

  Divider: {
    marginLG: 0,
    colorText: colors.gray[400],
    colorTextHeading: colors.gray[400],
  },

  Drawer: {
    borderRadiusLG: 16,
    borderRadiusOuter: 16,
    borderRadiusSM: 16,
    borderRadius: 16,
  },

  Form: {
    labelFontSize: 16,
    controlHeightLG: 8,
    fontWeightStrong: 500,
    itemMarginBottom: 16,
    labelColor: '#000',
  },

  Input: {
    controlHeightLG,
  },

  InputNumber: {
    controlHeightLG,
  },

  List: {
    padding: 0,
    itemPaddingLG: '6px 0',
  },

  Pagination: {
    itemActiveBg: colors.primary,
    borderRadius: 50,
  },

  Radio: {
    radioSize: 20,
    dotSize: 10,
    colorPrimary: token.colorPrimary,
  },

  Select: {
    controlHeightLG,
    padding: 12,
  },

  Segmented: {
    controlHeightLG: 53,
  },

  Slider: {
    trackBg: colors.primary,
    trackHoverBg: colors.primary,
  },

  Skeleton: {
    borderRadiusSM: 12,
  },

  Steps: {
    dotSize: 21,
    dotCurrentSize: 21,
    fontSizeLG: 12,
    marginLG: 0,
  },

  Switch: {
    colorPrimary: '#4caf50',
    colorPrimaryHover: '#65C466',
    handleSize: 27,
    trackHeight: 31,
    trackMinWidth: 51,
  },

  Tabs: {
    margin: 0,
  },

  Typography: {
    titleMarginBottom: 0,
    titleMarginTop: 0,
    colorLink: '#0EA5E9',
    colorSuccess: '#228A0C',
  },

  Upload: {
    paddingXS: 0,
  },

  Rate: {
    marginXS: 2.5,
  },
};

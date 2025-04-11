import {
  DrawerProps,
  FormItemProps,
  InputProps,
  RadioProps,
  SelectProps,
} from 'antd';
import { Rule } from 'antd/es/form';
import { FormInstance } from 'antd/lib';
import { ComponentProps, FunctionComponent, ReactNode, SVGProps } from 'react';
import { CSSProp } from 'styled-components';

export type TWrapperProps = {
  onClickBack?: () => void;
  bg?: string;
  extraHeader?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  hasBodyPadding?: boolean;
  headerRight?: ReactNode;
  navigation?: boolean;
  title?: string | ReactNode;
  children?: ReactNode;
  footerStyle?: CSSProp;
};

export type IconType = FunctionComponent<SVGProps<SVGSVGElement>>;

export type TBackProps = {
  label: string;
  isWhite?: boolean;
};

export type TNavigationItem = {
  id: number;
  icon: IconType;
  activeIcon: IconType;
  path: string;
};

export type TFieldProps = {
  rule?: Rule[];
  isFilled?: boolean;
  isRequired?: boolean;
  isTextarea?: boolean;
  isPassword?: boolean;
  children?: ReactNode;
} & Partial<FormItemProps & InputProps>;

export type TBoxProps = {
  $align?: 'center' | 'end' | 'start' | 'normal';
  $bg?: string;
  $color?: string;
  $sx?: CSSProp;
  $direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  $wrap?: string;
  $justify?:
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start';
  $gap?: string;
  $height?: string;
  $m?: string;
  $ml?: string;
  $mb?: string;
  $mr?: string;
  $mt?: string;
  $p?: string;
  $pb?: string;
  $pl?: string;
  $pt?: string;
  $rounded?: string;
  $width?: string;
};

export type TFieldWrapperProps = {
  prefixIcon?: ReactNode;
  children?: ReactNode;
} & SelectProps;

export type TDrawerProps = {
  onClosing?: () => void;
  isFull?: boolean;
  isMap?: boolean;
  isSearch?: boolean;
  children: ReactNode;
} & Partial<DrawerProps>;

export type TRadioItemProps = {
  icon: string;
  label: string;
} & Partial<RadioProps>;

export type TIconProps = {
  $width?: string;
  $height?: string;
  $color?: string;
  $stroke?: string;
};

export type TProfileOption = {
  onClick?: () => void;
  icon: string;
  bg: string;
  value?: ReactNode;
  color?: string;
  label: number;
};

export type TTransferResultProps = { label: string } & (
  | { value: string; oldValue?: string }
  | { value: number; oldValue?: number }
);

export type TCardProps = {
  id?: string;
  title?: string;
  subTitle?: string;
  children: ReactNode;
} & Partial<ComponentProps<'div'> & TBoxProps>;

export type TCardItemProps = {
  label: string;
  value?: string | number;
  children?: ReactNode;
};

export type TPaginationProps = {
  current?: number;
  total?: number;
  size?: number;
  onChangePage: (page: number) => void;
};

export type TProviderBtn = {
  bg: string;
  icon: string;
  onClick: () => void;
};

export type TLocationProps = {
  onChange?: () => void;
  countryCode?: string;
  isMain?: boolean;
  isExtra?: boolean;
};

export type TPassengerItemProps = {
  count: number;
  from: string;
  who: string;
  isTicket?: boolean;
  onClickMinus: () => void;
  onClickPlus: () => void;
};

export type TSelectCountryProps<T = any> = {
  label?: string;
  name?: string;
  isRequired?: boolean;
  hasLabel?: boolean;
  placeholder?: string;
  form: FormInstance<T>;
  rule?: Rule[];
};

export type TEmptyProps = {
  height?: number;
  text?: string;
};

export type TCustomAutocomplete = {
  isLoading?: boolean;
  setValue: (value: string) => void;
} & Partial<SelectProps>;

export type TCloudProps = {
  children: ReactNode;
  hasBack?: boolean;
  top?: number;
};

export type TRoomInfoProps = {
  group?: number;
  price?: number;
  currency?: string;
};

export type TLazyImgProps = {
  src?: string;
  alt: string;
} & Partial<TBoxProps>;

export type TCarouselProps = {
  additional?: ReactNode;
  hasBack?: boolean;
  children: ReactNode;
  length: number;
} & Partial<TBoxProps>;

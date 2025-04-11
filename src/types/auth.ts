import { ReactNode } from 'react';

export interface IAuthStore {
  user: TUser | null;
  deviceId: number | null;
  isWelcome: boolean;
  access_token: TValue;
  refresh_token: TValue;
  email: string;
  userName: string;
  params: string;

  logout: () => void;
  setUser: (user: TUser) => void;
  setEmail: (email: string) => void;
  setParams: (params: string) => void;
  setSession: (data: ISuccessResponse, isAxios?: boolean) => void;
  setUserName: (email: string) => void;
  setDeviceId: (deviceId: number) => void;
  setIsWelcome: (isWelcome: boolean) => void;
}

export type TValue = string | null;

export type TAuthValues = {
  login?: string;
  deviceId?: number | null;
  token?: string | null;
  firstName?: string;
  lastName?: string;
  pictureUrl?: string | null;
  authType?: EAuthType;
  otp?: string;
  email?: string;
  provider?: string;
  countryName?: string;
  referralId?: string | null;
  gender?: string;
  balanceType?: string;
};

export type TProviderValues = {
  provider: string;
  login?: string;
  fullName: string;
  pictureURL: string;
  userId?: string;
};

export type TUser = {
  userId: number;
  login: string;
  authType: EAuthType;
  giftState: EGiftState;
  justCreated: boolean;
  firstName?: string;
  countryName: string;
  lastName?: string;
  gender?: 'MALE' | 'FEMALE';
  pictureUrl: string | null;
  phoneNumber?: string;
  billingAccount?: TBillingAccount;
};

export type TBillingAccount = {
  id: number;
  userId: number;
  balance: number;
  currency: string;
  status: string;
  companies: TCompany[];
  parentAccountId: number;
  userApp: string;
  givenBonuses: string[];
  createdAt: string;
  updatedAt: string;
};

export type TCompany = {
  id: number;
  name: string;
  deleted: boolean;
};

export type TOtpBody = {
  email?: TValue;
  login?: TValue;
  opt?: string;
  otpType?: string;
};

export enum EAuthType {
  Email = 'EMAIL',
  Google = 'GOOGLE',
  Apple = 'APPLE_ID',
  Facebook = 'FACEBOOK',
  DeleteAccount = 'DELETE_ACCOUNT',
}

export interface ISuccessResponse {
  data: TUser;
  accessToken: string;
  refreshToken: string;
  status: number;
}

export type TAuthContentProps = {
  onFinish: (values: TAuthValues) => void;
  btnText: number;
  login?: string;
  children: ReactNode;
  title: number;
  subTitle?: number;
};

export type TAuthFieldsProps = {
  name?: string;
  type?: EAuthFields;
};

export enum EAuthFields {
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

export enum EGiftState {
  Given = 'GIVEN',
  CanBeGiven = 'CAN_BE_GIVEN',
  CanNotBeGiven = 'CAN_NOT_BE_GIVEN',
}

export type TCountriesData = {
  name: TName;
  cca2: string;
  flags: {
    png: string;
    svg: string;
    value: string;
  };
};

export interface TName {
  common: string;
  official: string;
}

export type TLogoutBody = {
  deviceId: number;
};

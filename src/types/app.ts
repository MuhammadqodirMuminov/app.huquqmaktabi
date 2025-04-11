import { FormInstance } from 'antd';
import { Action, BrowserHistory, Location } from 'history';
import { ComponentType } from 'react';
import { RouterProps } from 'react-router-dom';

export interface IAppStore {
  lang: string;
  page: number;
  size: number;
  action: Action;
  balance: TAmountData | null;
  location: Location;
  isDrawer: boolean;
  isLangDrawer: boolean;
  countryCode: string;
  userCountryCode: string;

  setPage: (page: number) => void;
  setLang: (lang: string) => void;
  setBalance: (balance: TAmountData) => void;
  setHistory: ({ action, location }: THistory) => void;
  setIsDrawer: (isDrawer: boolean) => void;
  setIsLangDrawer: (isDrawer: boolean) => void;
  setCountryCode: (countryCode: string) => void;
  setUserCountryCode: (userCountryCode: string) => void;
}

export type TPagesModule = {
  [key: string]: ComponentType;
};

type THistory = {
  action: Action;
  location: Location;
};

export type TRouterProps = {
  history: BrowserHistory;
} & Partial<RouterProps>;

export type TSocialLink = { type: string; value: string };

export type MapLocation = {
  lat: number;
  long: number;
};

export type TAmountData = {
  amount: number;
  type: string;
};

export interface IGetAmountParams {
  referralCode?: string;
  lat?: string;
  lng?: string;
}

export interface TWelcomeData extends IGetAmountParams {
  languageCode: string;
  deviceId: string;
}

export type TLazyPageProps = {
  pageName: string;
};

export interface YandexMetricaOptions {
  defer?: boolean;
  clickmap?: boolean;
  trackLinks?: boolean;
  accurateTrackBounce?: boolean;
}

export interface YandexMetricaHitOptions {
  callback?: () => void;
  ctx?: any;
  params?: Record<string, any>;
  referer?: string;
  title?: string;
}

export interface YandexMetrica {
  (id: number, event: 'init', options: YandexMetricaOptions): void;
  (
    id: number,
    event: 'hit',
    url: string,
    options?: YandexMetricaHitOptions,
  ): void;
  (
    id: number,
    event: 'reachGoal',
    goal: string,
    params?: Record<string, any>,
  ): void;
  (id: number, event: 'params', params: Record<string, any>): void;
  (id: number, event: 'userParams', params: Record<string, any>): void;
}

export type TUploadFileResponse = {
  id: number;
};

export type FormValues<Form> = Form extends FormInstance<infer X> ? X : never;

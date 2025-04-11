import type { DefaultError } from '@tanstack/react-query';
import type { PhoneNumber } from 'antd-phone-input';
import type { RangePickerProps } from 'antd/es/date-picker';
import dayjs, { type Dayjs } from 'dayjs';

import { history } from './history';
import { logMessage } from './log';
import { storage } from './storage';

import { message } from '@/app';
import { KEYS } from '@/common';
import type { TSingleParam } from '@/types/api';

export const getMinutes = (minute: number) => 1000 * 60 * minute;

export const getRoute = (...routes: Array<TSingleParam>) => {
  let route = '';

  for (let i = 0; i < routes.length; i++) {
    if (String(routes[i]).startsWith('/')) {
      route += routes[i];
    } else if (String(routes[i]).startsWith('?')) {
      route += routes[i];
    } else {
      route += `/${routes[i]}`;
    }
  }

  return route;
};

export const makeErrMsg = (error: DefaultError) => {
  const lang = storage.getItem(KEYS.lang) ?? 'en';

  if (typeof error === 'string') {
    return error;
  }

  const errMsg = error.message;

  if (typeof errMsg === 'object' && errMsg !== null) {
    return errMsg[lang as keyof typeof errMsg];
  } else if (Array.isArray(errMsg)) {
    return errMsg[0];
  } else {
    return errMsg;
  }
};

export const addMessage = (
  error: DefaultError,
  showMessage?: boolean,
): void => {
  const messageErr = makeErrMsg(error) as string;

  if (showMessage ?? true) {
    message.error({
      content: messageErr,
    });
  }

  logMessage(messageErr);
};

export const disabledDate: RangePickerProps['disabledDate'] = (current) =>
  current && current < dayjs().endOf('day');

export const datePickerProps = (isTime?: boolean) => ({
  getValueFromEvent: (e: Dayjs) => e?.format(isTime ? 'HH:mm' : 'YYYY-MM-DD'),
  getValueProps: (e: string) => ({
    value: e ? dayjs(e, isTime ? 'HH:mm' : 'YYYY-MM-DD') : null,
  }),
});

export const searchPush = (pathname: string, search: string) =>
  history.push({
    pathname,
    search,
  });

export const dateFormatter = (
  date: string,
  isHour: boolean,
  format?: string,
): string => {
  const defaultFormat = isHour ? 'HH:mm, MM-DD-YYYY' : 'MM-DD-YYYY HH:mm';
  return dayjs(date).format(format || defaultFormat);
};

export const isAppleDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  return userAgent.includes('iphone') || userAgent.includes('ipad');
};

export const getNum = (n: number) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
};

export const getDollars = (money: string) => `$${money}.00`;

export const getFormattedPhoneNumber = ({
  countryCode,
  areaCode,
  phoneNumber,
}: PhoneNumber): string => `${countryCode}${areaCode}${phoneNumber}`;

export const setBodyToTop = () => {
  document.getElementById('body')?.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const setScrollPosition = (key: string) => {
  const container = document.getElementById('body');

  if (container) {
    sessionStorage.setItem(
      `${key}-scroll-position`,
      container.scrollTop.toString(),
    );
  }
};

export const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const hasHtmlTags = (text: string) => /<\/?[a-z][\s\S]*>/i.test(text);

export const jsonSafeParse = (json: string) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
};

export const getImgSize = (image: string, size?: number) =>
  image?.split('{size}').join(size ? `x${size}` : 'x500');

export const toPascalCase = (str: string): string => {
  return str
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

export const toQueryParams = (params: Record<string, any>): URLSearchParams => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => queryParams.append(key, item));
    } else if (value !== undefined) {
      queryParams.append(key, value as string);
    }
  });
  return queryParams;
};
export const getFormattedPrice = (price: string | number, currency?: string) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency || 'USD',
  }).format(Number(price));

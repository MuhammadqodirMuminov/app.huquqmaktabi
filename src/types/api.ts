import { TGuest } from './hotel';

export interface IResponse<TContent> {
  data: TData<TContent>;
  status: number;
}

export interface TData<TContent> {
  data: TContent;
  content: TContent;
  pageable: TPageAble;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  size: number;
  hasNext: boolean;
  number: number;
  sort: TSort;
  first: boolean;
  empty: boolean;
  metadata?: TMetadata;
}

export type TMetadata = {
  guests: TGuest[];
};

export type TPageAble = {
  pageNumber: number;
  pageSize: number;
  sort: TSort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type TSort = {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
};

export type TSingleParam = number | string | undefined | null;

export interface IPagination {
  page: number;
  size: number;
}

export type TLocale = {
  uz: string;
  en: string;
  ru: string;
};

export type TError = {
  status: number;
  message: TLocale;
  errors: string[];
  success: boolean;
};

export type TPaymentResponse = {
  inSufficientBalance?: boolean;
  link: string;
};

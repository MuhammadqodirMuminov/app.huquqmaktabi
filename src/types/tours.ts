import { Ref } from 'react';

import { IPagination, TSingleParam } from './api';

export interface TCountry {
  id: number;
  name: string;
  code: string;
  defaultLocation: TDefaultLocation;
  picture?: string;
}

export type TDefaultLocation = {
  longitude: number;
  latitude: number;
};

export type TTourGroup = {
  priceNotIncludes: string[];
  extraInformation: TExtraInformation[];
  images: string[];
  priceNote: string;
  tourId: number;
  name: string;
  country: string;
  tourItenarary: TTourItenarary[];
  description: string;
  priceIncludes: string[];
  locations: Location[];
  startingPrice: number;
  price: number;
  upTo2: null | number;
  upTo6: null | number;
  upTo4: null | number;
  upTo10: number;
  upTo20: null | number;
  oldPrice: number;
  oldUpTo2: null | number;
  oldUpTo6: null | number;
  oldUpTo4: null | number;
  oldUpTo10: number;
  oldUpTo20: null | number;
  freeCancellation?: {
    day: number;
    hour: number;
    exists: boolean;
  };
  prices: {
    childPrices: {
      maxAge: number;
      price: number;
    }[];
    adultPrices: {
      from: number;
      price: number;
      oldPrice: any;
    }[];
  };
  media: {
    priority: number;
    url: string;
    mediaType: 'VIDEO' | 'IMAGE';
  }[];
};

export type TExtraInformation = {
  title: string;
  value: string;
};

export type TTourItenarary = {
  imageUrl: string;
  description: TDescription[];
  title: string;
  hour: string;
};

export interface TDescription {
  items: string[];
  hour: string;
}

export type TDeparture = {
  id: number;
  endDate: string;
  price: number;
  transferType: string;
  startDate: string;
};

export type TLocation = {
  lng: number;
  lat: number;
};

export type TTourPrice = {
  id: number;
  price: string;
  upToPersons: number;
  description: string;
};

export interface IGetToursByCountryParams extends IPagination {
  countryId: TSingleParam;
}

export type TCreateOrderResponse = {
  id: number;
  userId: number;
  agentId: number;
  status: string;
  type: string;
  details: TCreateOrderValues;
  price: number;
  createdAt: string;
  updatedAt: string;
  paymentType: EOrderPaymentType;
};

export type TCreateOrderValues = {
  tourId: number;
  comment?: string;
  language: string;
  startDate: string;
  phoneNumber: string;
  startingPrice: number;
  numberOfTravellers: number;
  paymentType: EOrderPaymentType;
  cancellationAt?: string;
};

export type TCreateOrderValuesV2 = {
  excursionId: number;
  comment?: string;
  startDate: string;
  phoneNumber: string;
  paymentType: EOrderPaymentType;
  adultsCount: number;
  childAgeAndCount: Record<number, number>;
};

export enum EOrderPaymentType {
  Card = 'CARD',
  Cash = 'CASH',
}

export type TTourHeroProps = {
  image: string;
  title: string;
  hour: string;
};

export type TTourProps = {
  item: TTourGroup;
  code: string;
  innerRef?: Ref<HTMLDivElement>;
};

export type TTourTabsProps = {
  activeKey: string;
  setActiveKey: (key: string) => void;
};

export type ITourCalculatePriceBody = {
  excursionId: number;
  adultsCount: number;
  childAgeAndCount: Record<number, number>;
};

export type TTourCalculatePriceResponse = {
  finalPrice: number;
  originalPriceBeforeDiscount: number;
  adultPrice: {
    count: number;
    price: number;
    totalPrice: number;
  };
  childPrice: {
    age: number;
    count: number;
    price: number;
    totalPrice: number;
  }[];
};

export type IGetCancelTimeParams = {
  excursionId: number;
  startDate: string;
  enabled?: boolean;
};

export type TTourCancelTimeResponse = {
  excursionId: number;
  freeCancellationAt?: string;
};

import { FormInstance } from 'antd';
import { Dayjs } from 'dayjs';
import { TFunction } from 'i18next';
import { MutableRefObject } from 'react';

import { EOrderPaymentType } from './tours';

export interface ITransferStore {
  hours: number;
  isMap: boolean;
  isTime: boolean;
  center: TPosition;
  select?: TCenter;
  category: TTransferCategory | null;
  currentCar: TCar | null;
  transferType: TTransferTypes;
  pickUpLocation: TLocation;
  destinationLocation: TLocation;
  routeInformation: TRouteInformation | null;
  details: string | null;

  setHours: (hours: number) => void;
  setIsMap: (isMap: boolean) => void;
  setIsTime: (isTime: boolean) => void;
  setSelect: (select?: TCenter) => void;
  setCenter: (center: TPosition) => void;
  setCategory: (category: TTransferCategory | null) => void;
  setCurrentCar: (car: TCar | null) => void;
  setRouteInformation: (routeInformation: TRouteInformation | null) => void;
  setTransferType: (value: TTransferTypes) => void;
  setDestinationLocation: (to: TLocation) => void;
  setPickUpLocation: (from: TLocation) => void;
  setDetails: (details: string | null) => void;
}

type TCenter = 'origin' | 'destination' | 'cancel';

export type TLocation = {
  name: string;
  position?: {
    lng: number;
    lat: number;
  };
};

type TRoute = { value: number; text: string };

export type TRouteInformation = {
  distance: TRoute;
  duration: TRoute;
};

export type TTransferTypes = 'RIDE' | 'PER_HOUR';

export type TTourDetailsForm = {
  orderDate: Dayjs;
  orderTime: Dayjs;
  vehicle: string;
  phoneNumber: string;
  paymentType: EOrderPaymentType;
};

export type TPosition = {
  lat: number;
  lng: number;
};

type TData = { origin?: TPosition; destination?: TPosition };

export type TOnChange = (data: TData) => void;

export type TTextValue = {
  text: string;
  value: number;
};

export type TOnFinish = (data: {
  origin: TPosition;
  destination: TPosition;
  distance: TTextValue;
  duration: TTextValue;
}) => void;

export type TProperties = {
  center: TPosition;
  origin?: TPosition;
  destination?: TPosition;
  select?: 'origin' | 'destination' | 'cancel';
  onChange?: TOnChange;
  onFinish?: TOnFinish;
  width?: string;
  height?: string;
};

export type TLocationInputProps = {
  type: 'pickUpLocation' | 'destinationLocation';
  onIconClick?: () => void;
  value?: string;
  isLoading?: boolean;
};

export type TCreateTransferOrder = {
  carId: number;
  transferType: 'HOURLY' | 'A_TO_B';
  destination: {
    latitude: number;
    longitude: number;
  };
  pickUpLocation: {
    latitude: number;
    longitude: number;
  };
  pickUpDate: Dayjs;
  pickUptime: string;
  hours: number;
  directionId: number;
  phoneNumber: string;
  paymentType: EOrderPaymentType;
  cancellationAt?: string;
};

export type TCreateTransferResponse = {
  agentId: null;
  createdAt: string;
  details: TCreateTransferOrder;
  id: number;
  price: number;
  status: string;
  type: string;
  updatedAt: null;
  userId: number;
  paymentType: EOrderPaymentType;
};

export type TTransferPayment = {
  email: string;
  comment: string;
  paymentType: boolean;
};

export type TStripePayment = {
  orderId: string | number;
  email: string;
  redirectUrl: string;
};

export type TLink = {
  link: string;
};

export type TPageableCategory = {
  pageNumber: number;
  pageSize: number;
  sort: TSortCategory;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type TSortCategory = {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

export type TCarParams = {
  page: number;
  size: number;
  categoryId: number;
};

export type TBoundaryData = {
  id: number;
  name: string;
  lineString: string;
  lowerCorner: TCorner;
  upperCorner: TCorner;
  code: string;
  type: string;
  parentId: number;
  deleted: boolean;
};

type TCorner = {
  id: number;
  longitude: number;
  latitude: number;
};

export type TBoundaryParams = {
  longitude?: number;
  latitude?: number;
};

export type TGetTransferCategoryParams = {
  destinationsBoundaryId: string;
  sourceBoundaryId: string;
};

type TBoundary = {
  id: number;
  name: string;
  code: string;
  type: string;
};

export type TDirections = {
  id: number;
  destinationBoundary: TBoundary;
  hourlyPrice: number;
  sourceBoundary: TBoundary;
  transferPrice: number;
};

export type TCarCard = {
  car: TCar;
  form?: FormInstance<TTourDetailsForm>;
  isDrawer?: boolean;
};

export type TRouteExists = {
  sourceBoundary: string;
  destinationBoundary: string;
};

export type TCheckRouteResponse = {
  directionExists: boolean;
};

export type TCategoryListProps = {
  data?: TTransferCategory[];
};

export type TTimePickerItemProps = {
  label: string;
  perspective: boolean;
  onChange: (time: number) => void;
};

export type TTransferCategory = {
  id: number;
  image: string;
  startingPrice: number;
  seats: number;
  luggage: number;
  priority?: number;
  name: string;
  createdAt?: string;
  updatedAt: string;
  deleted: boolean;
  cars: TCar[];
};

export type TCar = {
  id: number;
  name: string;
  category: TCategory;
  luggage: any;
  seats: any;
  pictures: string[];
  manufactureDate: string;
  directions: TDirection[];
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
};

export type TCategory = {
  id: number;
  startingPrice: number;
  seats: number;
  luggage: number;
  priority?: number;
  name: string;
  createdAt?: string;
  updatedAt: string;
  deleted: boolean;
};

export type TDirection = {
  id: number;
  transferPrice: number;
  hourlyPrice: number;
  sourceBoundary: TSourceBoundary;
  destinationBoundary: TDestinationBoundary;
};

export type TSourceBoundary = {
  id: number;
  name: string;
  code: string;
  type: string;
};

export type TDestinationBoundary = {
  id: number;
  name: string;
  code: string;
  type: string;
};

export type TMapDrawerProps = {
  timeout: MutableRefObject<number | undefined>;
  t: TFunction<'services'>;
};

export interface IRentalCarStore {
  isSearch: boolean;
  countryId: null | number;
  price: number;
  paymentType: EOrderPaymentType;
  serviceCounts: TServiceCounts;
  locationType: null | ELocationType;

  isReturnSameLocation: boolean;
  returnLocation: null | TAdreess;
  pickupLocation: null | TAdreess;
  boundaryId: null | number;

  resetState: () => void;
  setIsSearch: (isSearch: boolean) => void;
  setReturnLocation: (returnLocation: TAdreess | null) => void;
  setPickupLocation: (pickupLocation: TAdreess | null) => void;
  setIsReturnSameLocation: (isReturnSameLocation: boolean) => void;
  setPaymentType: (paymentType: EOrderPaymentType) => void;
  setCountryId: (countryId: number) => void;
  setPrice: (price: number) => void;
  setLocationType: (locationType: ELocationType | null) => void;
  setBoundaryId: (boundaryId: number) => void;

  setServiceCounts: (
    type: TServiceType,
    checked: boolean | null,
    days: number,
    dailyPrice: number,
  ) => void;
}

export type TServiceType = 'driver' | 'insurance';
export type TServiceCounts = Record<TServiceType, number>;

export type TSearchCountry = {
  id: number;
  name: string;
  iata: string;
};

export type TCarSearchParam = {
  page: string;
  size: string;
  startDate: string;
  endDate: string;
  carTypes?: string[];
  [key: string]: string | number | string[] | undefined;
};

export type TFinishData = {
  place: string;
  startData: string;
  startTime: string;
  endDate: string;
  endTime: string;
  cityId: number;
};

export type TCarData = {
  carId: number;
  carCondition: ECarCondition;
  brandName: string;
  modelName: string;
  year: number;
  dailyPrice: number;
  numberOfSeats: string;
  luggageSpace: any;
  airConditionerType: EAirConditionerType;
  transmissionType: ETransmissionType;
  fuel: string;
  dailyKmLimit: number;
  addresses: Address[];
  images: string;
  agencyName: string;
  discountPercent: number;
  oldPrice: number;
};

export type Address = {
  countryId: number;
  street: string;
  cityId: number;
  latitude: number;
  longitude: number;
  locationType: string;
};

export enum ECarType {
  Sedan = 'SEDAN',
  SUV = 'SUV',
  Hatchback = 'HATCHBACK',
  Coupe = 'COUPE',
  Convertible = 'CONVERTIBLE',
  Minivan = 'MINIVAN',
  Pickup = 'PICKUP',
  StationWagon = 'STATION_WAGON',
  SportsCar = 'SPORTS_CAR',
  LuxuryCar = 'LUXURY_CAR',
  Electric = 'ELECTRIC',
  Hybrid = 'HYBRID',
}

export enum ETransmissionType {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
}

export enum EAirConditionerType {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
  CLIMATE_CONTROL = 'CLIMATE_CONTROL',
  UNKNOWN = 'UNKNOWN',
}

export enum ECarCondition {
  NEW = 'NEW',
  GOOD = 'GOOD',
  AVERAGE = 'AVERAGE',
  POOR = 'POOR',
}

export interface CarDetail {
  id: number;
  brandName: string;
  modelName: string;
  year: number;
  imageUrl: string[];
  carCondition: string;
  dailyPrice: number;
  totalPrice: number;
  daysBetween: number;
  carSpecification: CarSpecification;
  location: Location[];
  carDelivery: number;
  personalDriver: number;
  babyChairPrice: number;
  insurancePrice: number;
  wifiInternetPrice: number;
  returnDelivery: number;
  minimalAge: number;
  minimalDrivingExperience: TMinimalDrivingExperience;
  depositRefundPeriod: TDepositRefundPeriod;
  deposit: number;
  fuelPolicy: string;
  image: any;
  startDate: string;
  endDate: string;
  discountPercent: number;
  oldPrice: number;
}

export interface CarSpecification {
  year: number;
  condition: string;
  brandName: string;
  modelName: string;
  engine: string;
  numberOfSeats: number;
  luggageSpace: any;
  transmissionType: string;
  fuel: string;
  consumption: string;
  airConditioner: string;
  carCondition: string;
}

type TMinimalDrivingExperience = {
  quantityExperience: number;
  timeUnitExperience: ETimePeriod;
};

type TDepositRefundPeriod = {
  quantityRefundPeriod: number;
  timeUnitRefundPeriod: ETimePeriod;
};

export enum ETimePeriod {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
  WEEK = 'WEEK',
  DAYS = 'DAYS',
}

export interface Location {
  id: number;
  countryId: number;
  address: string;
  cityId: number;
  latitude: number;
  longitude: number;
  locationType: string;
}

export interface Pricing {
  babyChairPrice: number;
  carDeliveryPrice: number;
  dropOffPrice: number;
  personalDriverPrice: number;
  ratePerKmAfterLimit: number;
  insurancePrice: number;
  wifiInternetPrice: number;
}

export interface TimeRange {
  MONDAY: DayTimeRange;
  TUESDAY: DayTimeRange;
}

export interface DayTimeRange {
  startTime: string;
  endTime: string;
}

export interface CarModel {
  id: number;
  name: string;
  type: string;
  carType: string;
  luggageSpace: string;
  engine: string;
  numberOfSeats: number;
  fuel: string;
  consumption: string;
  brand: CarBrand;
}

export interface CarBrand {
  id: number;
  name: string;
}

export type TCreateRentCarOrder = {
  carId: number;
  startDate: string;
  endDate: string;
  paymentType: string;
  pickupLocation: TAdreess;
  returnLocation: TAdreess;
  additionalServices: TAdditionalService[] | [];
};

export type TAdreess = {
  latitude: number;
  longitude: number;
  address: string;
};

export type TCreateRentCarOrderResponse = {
  id: number;
  userId: any;
  agentId: any;
  status: string;
  type: string;
  details: TCreateRentCarOrder;
  price: number;
  oldPrice: number;
  discountPercent: number;
  createdAt: string;
  updatedAt: any;
  paymentType: string;
};

export type TAdditionalService = {
  name: string;
  count: number;
};

export enum EOrderPaymentType {
  Card = 'CARD',
  Cash = 'CASH',
}

export enum ELocationType {
  Pickup = 'PICKUP',
  Return = 'RETURN',
}

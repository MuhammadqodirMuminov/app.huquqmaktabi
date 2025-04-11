import { ReactNode } from 'react';

import { IPagination } from './api';
import { TLocation, TPaymentOptions, TRoom } from './hotel';

export type IProfileStore = {
  tokenSent: boolean;

  setTokenSent: (tokenSent: boolean) => void;
};

export type TUpdateUserValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryName: string;
  gender?: 'MALE' | 'FEMALE';
};

export type TFillBalanceValues = {
  amount: number;
  email?: string;
  returnUrl: string;
};

export type TStrongText = {
  label: string;
  value: string | ReactNode;
};

export type TAccountHistory = {
  id: number;
  amount: number;
  currency: string;
  userApp: string;
  userId: number;
  createdAt: string;
};

export type TUserOrder = {
  content: TOrder[];
  count: number;
};

export enum EUserOrderType {
  Hotel = 'HOTEL',
  Transfer = 'TRANSFER',
  Tour = 'TOUR',
  Excursion = 'EXCURSION',
  RentCar = 'RENT_A_CAR',
}

export enum EUserOrderTransferType {
  AToB = 'A_TO_B',
  Hourly = 'HOURLY',
}

export interface IUserOrderParams extends IPagination {
  orderStatus: string;
  isActive: boolean;
}

export type TOrderHotel = {
  id: string;
  name: string;
  type: EUserOrderType.Hotel;
  orderId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  price: number;
  paymentOptions: TPaymentOptions;
  rooms: TRoom[];
  hotelId: number;
  address: string;
  center: TLocation;
  pictures: string[];
};

export type TOrderTransfer = {
  id: string;
  name: string;
  type: EUserOrderType.Transfer;
  transferOrderType: EUserOrderTransferType;
  pickUpDate: string;
  pickUpTime: string;
  hours?: number;
  directionId: number;
  sourceBoundaryName: string;
  destinationBoundaryName?: string;
  destination: TLocation;
  pickUpLocation: TLocation;
};

export type TOrderRentCar = {
  id: string;
  name: string;
  type: EUserOrderType.RentCar;
  brand: string;
  pickupAddress: {
    address: string;
  };
  startDate: string;
};

export type TOrderExcursion = {
  id: string;
  name: string;
  type: EUserOrderType.Excursion;
  startDate: string;
  paymentType: string;
  status: string;
};

export type TOrderTour = {
  id: string;
  userId: number;
  agentId: any;
  status: string;
  type: EUserOrderType.Tour;
  details: {
    guest: Array<{
      lastName: string;
      birthDate: string;
      firstName: string;
      guestType: string;
      citizenship: string;
      dateOfIssue: string;
      passportNumber: string;
      passportSeries: string;
      validityPeriod: string;
    }>;
    checkIn: string;
    comment: string;
    dmcType: string;
    checkOut: string;
    phoneNumber: string;
    additionalInfo: {
      hotel: {
        meal: string;
        star: number;
        mealId: number;
        roomId: number;
        hotelId: number;
        htPlace: string;
        roomName: string;
        hotelName: string;
        roomImages: Array<string>;
        hotelImages: Array<string>;
        roomDescription: any;
      };
      price: number;
      flight: {
        routes: Array<{
          info: {
            date: string;
            sourceTown: string;
            targetTown: string;
          };
          flights: Array<{
            id: string;
            name: string;
            arrival: {
              port: string;
              time: string;
              portId: number;
            };
            departure: {
              port: string;
              time: string;
              portId: number;
            };
            transportType: string;
            transportCompany: string;
            transportCompanyKey: number;
            transportCompanyLogo: string;
          }>;
        }>;
      };
      nights: number;
      source: string;
      tourId: number;
      checkIn: string;
      checkOut: string;
      currency: string;
      discount: number;
      oldPrice: number;
      tourName: string;
      identifier: string;
      destination: string;
      programType: string;
      sourceCityId: number;
      destinationCountryId: number;
    };
    cancellationAt: any;
    tourIdentifier: string;
  };
  price: number;
  oldPrice: number;
  discountPercent: number;
  createdAt: string;
  updatedAt: any;
  paymentType: string;
};

export type TOrder =
  | TOrderHotel
  | TOrderTransfer
  | TOrderExcursion
  | TOrderTour
  | TOrderRentCar;

export type TUpdateDeviceLanguageBody = {
  deviceId: number;
  language: string;
};

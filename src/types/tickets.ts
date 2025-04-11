import { Dayjs } from 'dayjs';

import { Icons } from '@/components';

export interface ITicketsStore {
  formData: ITicketSearchBody | null;
  filteredData: TTicketsData | null;
  isChart: boolean;
  isFilter: boolean;
  isAirlines: boolean;
  isFiltered: boolean;
  isCabin: boolean;
  flightType: EFlight;
  cabin: ECabins;
  departureDate: Dayjs | null;
  passengerCounts: TPassengerCounts;

  setFormData: (values: ITicketSearchBody) => void;
  setFilteredData: (filteredData: TTicketsData) => void;
  setIsChart: (isChart: boolean) => void;
  setInfants: (infants: number) => void;
  setIsFilter: (isFilter: boolean) => void;
  setCabin: (cabin: ECabins) => void;
  setIsCabin: (isCabin: boolean) => void;
  setIsAirlines: (isChart: boolean) => void;
  setFlightType: (flightType: EFlight) => void;
  setDepartureDate: (departureDate: Dayjs) => void;
  setPassengerCounts: (type: TPassengerType, increment: boolean) => void;
}

export type TPassengerType = 'adults' | 'children' | 'infants';
export type TPassengerCounts = Record<TPassengerType, number>;

export interface ITicketSearchBody {
  destinations: TDestination[];
  adults: number;
  children: number;
  infants: number;
  cabin: string;
}

export type TTicketsOfferBody = {
  offers: TTicketsOffer[];
};

export type TDestination = {
  departureCity: string;
  destinationCity: string;
  departureDate: string;
  returnDate?: string;
  roundTrip?: boolean;
};

export type ITicketSearchParam = {
  size: number;
  page?: number;
  cabin?: string;
  oneWay?: string;
  maxPrice?: string;
  minPrice?: string;
  sortByPrice?: string;
  carrierCode?: string;
  amenitiesFilter?: string;
  body?: ITicketSearchBody;
  checkedBagsFilter?: string;
  passenger?: TPassengerCounts;
  withAdditionalServices?: string;
};

export type TTicketsData = {
  data: TTicketsOffer[];
  dictionaries: TDictionaries;
};

type TDictionaries = {
  locations: { [key: string]: TLocation };
  aircraft: { [key: string]: string };
  currencies: { [key: string]: string };
  carriers: TCarrier;
};

export type TCarrier = {
  [carrierCode: string]: string;
};

type TLocation = {
  cityCode: string;
  countryCode: string;
};

export type TTicketsOffer = {
  type: string;
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  lastTicketingDate: string;
  lastTicketingDateTime: string;
  numberOfBookableSeats: number;
  itineraries: TItinerary[];
  price: TPrice;
  pricingOptions: TPricingOptions;
  validatingAirlineCodes: string[];
  travelerPricings: TTravelerPricing[];
};

export type TItinerary = {
  duration: string;
  segments: TSegment[];
};

export type TSegment = {
  departure: TDeparture;
  arrival: TArrival;
  carrierCode: string;
  number: string;
  aircraft: TAircraft;
  operating: TOperating;
  duration: string;
  id: string;
  numberOfStops: number;
  blacklistedInEU: boolean;
};

export type TDeparture = {
  iataCode: string;
  terminal?: string;
  at: string;
};

export type TArrival = {
  iataCode: string;
  at: string;
  terminal?: string;
};

export type TAircraft = {
  code: string;
};

export type TOperating = {
  carrierCode: string;
};

export type TPrice = {
  currency: string;
  total: string;
  base: string;
  fees: TFee[];
  grandTotal: string;
};

export type TFee = {
  amount: string;
  type: string;
};

export type TPricingOptions = {
  includedCheckedBagsOnly: boolean;
  fareType: string[];
  refundableFare: boolean;
  noRestrictionFare: boolean;
  noPenaltyFare: boolean;
};

export type TTravelerPricing = {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: TPrice2;
  fareDetailsBySegment: TFareDetailsBySegment[];
  associatedAdultId?: string;
};

export type TPrice2 = {
  currency: string;
  total: string;
  base: string;
};

export type TFareDetailsBySegment = {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  class: string;
  isAllotment: boolean;
  includedCheckedBags?: TIncludedCheckedBags;
  brandedFare?: string;
  amenities?: TAmenity[];
};

export type TIncludedCheckedBags = {
  quantity: number;
  weight: number;
  weightUnit: string;
};

export type TAmenity = {
  description: string;
  isChargeable: boolean;
  amenityType: string;
};

export type TResultFilterProps = {
  icon: keyof typeof Icons;
  label: string;
  isChart?: boolean;
  onClick: () => void;
};

export type TFilterValues = {
  layovers?: string[];
  luggage: number;
  price?: number;
  return: number;
};

export type TSearchAirlineParams = {
  name: string;
};

export type TSearchAirlineData = {
  id: string;
  displayname: string;
  loctype: string;
  cid: number;
  rid: number;
  ctid: number;
  lat: number;
  lng: number;
  cc: string;
  country: string;
  rc: string;
  cityname: string;
  timezone: string;
  utc: string;
  airportname: string;
  ap: string;
  apicode: string;
  box_maxX: number;
  box_maxY: number;
  box_minX: number;
  box_minY: number;
  cityonly: string;
  destination_images?: TDestinationImages;
};

export type TDestinationImages = {
  image_jpeg: string;
  image_webp: string;
};

export enum EFlight {
  OneWay = 'ONE_WAY',
  RoundTrip = 'ROUND_TRIP',
  MultiCity = 'MULTI_CITY',
}

export enum ECabins {
  Economy = 'ECONOMY',
  PremiumEconomy = 'PREMIUM_ECONOMY',
  Business = 'BUSINESS',
  First = 'FIRST',
}

export type TFlightOffersPricing = {
  type: string;
  flightOffers: TTicketsOffer[];
  bookingRequirements: TBookingRequirements;
  included: Record<string, unknown>; // or a more specific type if known
  dictionaries: TDictionaries;
};

export type TBookingRequirements = {
  emailAddressRequired: boolean;
  mobilePhoneNumberRequired: boolean;
  travelerRequirements: TTravelerRequirement[];
};

export type TTravelerRequirement = {
  travelerId: string;
  documentRequired: boolean;
  genderRequired: boolean;
  redressRequiredIfAny: boolean;
  dateOfBirthRequired: boolean;
  residenceRequired: boolean;
};

export type TPassenger = {
  id: number;
  birthday: string;
  firstName: string;
  surname: string;
  phoneNumber: string;
  country: string;
  countryName: string;
  gender: string;
  series: string;
  date: string;
  period: string;
  passengerType: string;
};

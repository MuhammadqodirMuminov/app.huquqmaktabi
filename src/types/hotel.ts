import { ReactNode } from 'react';

import { IconType } from './components';

export interface IHotelStore {
  guests: TFormGuest;
  typeId: TType | null;
  place: string;
  formData: TFilterHotelValues;
  isSearch: boolean;
  isFilter: boolean;
  isGallery: boolean;
  isDetails: boolean;

  roomImage: string;
  roomImages: string[];
  roomDetails: TOtherHotelGroups | TLetsTripRoom | null;
  selectedOtherRoom: string | null;
  selectedLetsTripRooms: { [group: number]: number | null };
  setSelectedLetsTripRooms: (updatedRooms: {
    [group: number]: number | null;
  }) => void;
  toggleLetsTripRoom: (group: number, roomId: number) => void;
  initializeLetsTripRooms: (
    groups: { group: number; rooms: { id: number }[] }[],
  ) => void;

  preBookData: TPreBookData | null;
  roomData: TRoomData;

  setPlace: (place: string) => void;
  handleAgeChange: (value: number, childIndex: number) => void;
  handleAdultChange: (increment: boolean) => void;
  handleChildChange: (increment: boolean) => void;
  handleRoomChange: (increment: boolean) => void;

  selectOtherRoom: (bookHash: string | null) => void;
  handleOpenDetailsDrawer: (room: TOtherHotelGroups | TLetsTripRoom) => void;
  handleCloseDetailsDrawer: () => void;

  setTypeId: (typeId: TType) => void;
  setFormData: (values: TFilterHotelValues) => void;
  setIsSearch: (isSearch: boolean) => void;
  setIsFilter: (isFilter: boolean) => void;
  setIsGallery: (isGallery: boolean) => void;
  setRoomImage: (image: string) => void;
  setRoomImages: (images: string[]) => void;
  setPreBookData: (data: TPreBookData) => void;
  setRoomData: (order: TRoomData) => void;
  getTotalGuests: () => number;
}

export type TFormGuest = {
  roomCount: number;
  adultsCount: number;
  childrenAges: number[];
};

export type THotelData = {
  meal: string;
  freeCancellation: boolean;
  currency: string;
  dmcType: string;
  facilities: string[];
  hotelId: number;
  imageIds: string[];
  name: string;
  perNightPrice: number;
  rate: number;
  star: number;
  totalPrice: number;
  oldTotalPrice: number;
  discountPercent: number | null;
  views: number;
};

export type TGuest = {
  adults: number;
  children: number[];
};

export type TFilterHotelValues = {
  place: string;
  checkIn: string;
  checkOut: string;
  // fromTo: string;
  // guests: TGuest[];
  residency: string;
};

export type THotelHeaderProps = {
  title: string;
  subTitle?: string;
  stars?: ReactNode;
};

export type TSelectedRooms = {
  [key: number]: number;
};

export type THotelTextProps = { label: string; value: string };

export type TListProps = {
  items: Array<{
    icon: IconType;
    title: string;
  }>;
};

type THotel = {
  id: number;
  name: string;
  type?: 'HOTEL' | 'CITY' | 'AIRPORT';
  countryName?: string;
};

type THotelLocation = THotel & {
  locationType: string;
};

export type THotelAutocompleteData = {
  hotels: THotel[];
  locations: THotelLocation[];
};

export type TType = {
  [x: string]: number;
};

export interface THotelSearchValues extends TFormGuest {
  guests: string;
  checkIn: string;
  hotelId?: string;
  locationId?: string;
  checkOut: string;
  currency: string;
  dmcType?: string;
  residency: string;
  bookHash?: string;
  place: string;
  size?: number;
  page?: number;
}

export type THotelDetail = {
  hotelId: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  kind: EAccommodationType;
  checkIn: string;
  checkOut: string;
  facts: TFacts;
  region: TRegion;
  center: TLocation;
  images: string[];
  policyStruct: TPolicyStruct[];
  amenityGroups: TAmenityGroup[];
  descriptionStruct: TDescriptionStruct[];
  closed: boolean;
  starRating: number;
};

export enum EAccommodationType {
  Resort = 'Resort',
  Sanatorium = 'Sanatorium',
  Guesthouse = 'Guesthouse',
  MiniHotel = 'Mini-hotel',
  Castle = 'Castle',
  Hotel = 'Hotel',
  BoutiqueAndDesign = 'Boutique_and_Design',
  Apartment = 'Apartment',
  CottagesAndHouses = 'Cottages_and_Houses',
  Farm = 'Farm',
  VillasAndBungalows = 'Villas_and_Bungalows',
  Camping = 'Camping',
  Hostel = 'Hostel',
  BNB = 'BNB',
  Glamping = 'Glamping',
  ApartHotel = 'Apart-hotel',
}

type TRegion = {
  country_code: string;
  iata: string;
  name: string;
  id: number;
  type: string;
};

export type TLocation = {
  longitude: number;
  latitude: number;
};

type TFacts = {
  floors_number: number;
  rooms_number: number;
  year_renovated: number | null;
  // electricity: Electricity
  year_built: number | null;
};

export type TAmenityGroup = {
  amenities: string[];
  group_name: string;
};

export type TChildrenItemProps = {
  childrenCounter: number;
  childrenAges: number[];
  setChildrenAges: (ages: number[]) => void;
};

export type TPolicyStruct = {
  paragraphs: string[];
  title: string;
};

export type TDescriptionStruct = {
  paragraphs: string[];
  title: string;
};

// SELECT ROOM
export type THotelRoomData<TGroups> = {
  hotelId: number;
  dmcType: string;
  roomGroups: TGroups[];
};

export type TOtherHotelGroups = {
  roomDataTrans: TRoomDataTrans;
  images: string[];
  roomAmenities: string[];
  rgExt: TRgExt;
  roomName: string;
  paymentOptions: TPaymentOptions;
  bookHash: string;
};

export type TRoomDataTrans = {
  main_room_type: string;
  misc_room_type: string;
  main_name: string;
  bathroom: any;
  bedding_type: any;
};

export type TRgExt = {
  bedrooms: number;
  view: number;
  bedding: number;
  sex: number;
  club: number;
  family: number;
  floor: number;
  class: number;
  balcony: number;
  bathroom: number;
  quality: number;
  capacity: number;
};

export type TPaymentOptions = {
  totalPrice: number;
  oldTotalPrice: number;
  discountPercent: number | null;
  currencyCode: string;
  taxData: TTaxData;
  vatData: TVatData;
};

export type TTaxData = {
  taxes: TTax[];
};

export type TTax = {
  includedBySupplier: boolean;
  amount: string;
  name: string;
  currencyCode: string;
};

export type TVatData = {
  amount: string;
  applied: boolean;
  included: boolean;
  currencyCode: string;
};

export type TLetsTripGroups = {
  group: number;
  rooms: TLetsTripRoom[];
};

export type TLetsTripRoom = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  extraDetails: TExtraDetails;
  images: string[];
  amenities: TAmenities;
};

export type TExtraDetails = {
  smokingAllowed: boolean;
  size: string;
  bathRoomType: boolean;
  roomType: string;
};

export type TAmenities = {
  Bathroom: string[];
  Bedroom: string[];
  View: string[];
  Rooms: string[];
};

export type THotelRoomParams = {
  hotelId: number;
  dmcType: string;
  details: THotelRoomParamDetails;
};

export type THotelRoomParamDetails = {
  bookHash?: string;
  checkIn: string;
  checkOut: string;
  roomCount?: number;
  roomIds?: number[];
};

// PRE-BOOK
export type TPreBookData = {
  hotelId: number;
  dmcType: string;
  hotelName: string;
  address: string;
  priceChanged: boolean;
  bookHash: string;
  rooms: TPreBookRoom[];
  paymentOptions: TPaymentOptions;
  center: TLocation;
};

export type TPreBookRoom = {
  roomId: number;
  roomName: string;
  price: number;
  currency: string;
};

export interface IHotelOverviewParams extends TPreBookData {
  guests: TGuest[];
}

// HOTELS ORDER
export type TCreatesOrderValues = {
  hotelId: number;
  bookHash: string;
  dmcType: string;
  rooms: TOrderRoom[];
  phoneNumber: string;
  email: string;
  country: string;
  checkIn: string;
  checkOut: string;
};

export type TOrderRoom = {
  roomNumber: number;
  guests: TOrderGuest[];
};

type TOrderGuest = {
  firstName: string;
  lastName: string;
  isChild: boolean;
  age: number;
};

export type TRoomData = {
  email: string;
  phoneNumber: string;
  rooms: TOrderRoom[];
};

export type TCreateOrderResponse = {
  id: number;
  userId: number;
  agentId: any;
  status: string;
  type: string;
  details: TDetails;
  price: number;
  createdAt: string;
  updatedAt: any;
};

export type TDetails = {
  email: string;
  rooms: TRoom[];
  checkIn: string;
  country: string;
  dmcType: string;
  hotelId: number;
  bookHash: string;
  checkOut: string;
  latitude: number;
  roomName: string;
  hotelName: string;
  languages: string;
  longitude: number;
  phoneNumber: string;
  partnerOrderId: any;
  paymentOptions: TPaymentOptions;
};

export type TRoom = {
  guests: TGuest2[];
  roomNumber: number;
};

export type TGuest2 = {
  age: any;
  isChild: boolean;
  lastName: string;
  firstName: string;
};

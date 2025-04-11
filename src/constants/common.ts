import { ROUTES } from './routes';

export const API_URL = (
  import.meta.env.APP_BRANCH === 'main'
    ? import.meta.env.APP_BASE_URL
    : import.meta.env.APP_BASE_URL_TEST
) as string;
export const GOOGLE_API_KEY = import.meta.env.APP_API_GOOGLE_KEY;
export const PAYMENT_URL = `${window.location.origin}${ROUTES.paymentSuccess}`;
export const PAYMENT_SUCCESS_CARD_URL = `${window.location.origin}${ROUTES.paymentSuccessV2}?type=card`;
export const PAYMENT_SUCCESS_CASH_URL = `${window.location.origin}${ROUTES.paymentSuccessV2}?type=cash`;

export const SEARCH_KEYS = {
  id: 'id',
  code: 'code',
  step: 'step',
  name: 'name',
  price: 'price',
  login: 'login',
  token: 'token',
  values: 'values',
  fromTo: 'fromTo',
  destinationId: 'destinationId',
  destinationLocation: 'destinationLocation',
  transferType: 'transferType',
  hours: 'hours',
  pickupId: 'pickupId',
  pickUpLocation: 'pickUpLocation',
  place: 'place',
  country: 'country',
  from: 'from',
  to: 'to',
  hotelId: 'hotelId',
  date: 'date',
  type: 'type',
  company: 'company',
  passenger: 'passenger',
  travelers: 'travelers',
  freeCancel: 'freeCancel',
  carType: 'carType',
  tab: 'tab',
  pickup: 'pickup',
  return: 'return',
  goBackOnSwipe: 'goBackOnSwipe',
  source: 'source',
} as const;

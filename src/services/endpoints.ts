export enum Endpoints {
  // AUTH
  DeleteAccount = 'delete-account',
  Sign = '',
  GetMe = 'get-me',
  Otp = 'send-otp',
  Verify = 'verify-otp',
  Logout = 'v1/device/logout-user-from-device',

  // Welcome
  GetAmount = 'payment/get-fill-balace-amount',

  // Tickets
  TicketOffers = 'v1/flights/search',
  SearchAirline = 'v1/flights/airline-search',
  TicketPricing = 'v1/flights/pricing',

  // PROFILE
  UpdateUser = 'update-user-info',
  UpdateProfileImage = 'update-profile-image',
  DeleteProfileImage = 'delete-profile-image',
  FillBalance = 'payment/fill-balance',
  Orders = 'orders',
  AccountHistory = 'user-account/history',
  UpdateDeviceLanguage = 'v1/device/update-device-language',

  // EXCURSION
  TourCountries = 'v1/countries',
  ByCountry = 'country',
  CreateTourOder = 'orders/tour',
  // new api
  Excursions = 'v1/excursions',
  CalculateExcursionPrice = 'calculate-excursion-price',

  // TRANSFER
  CreateTransfer = 'orders/transfer',
  PaymentTransfer = 'payment', // live mode
  PaymentTransferTest = 'payment/v2', // test mode
  TransferCategory = 'transfer/categories/with-cars',
  TransferBoundaries = 'transfer/boundaries',
  RouteExists = 'transfer/directions/source-boundary',

  // HOTELS
  HotelAutoComplete = 'hotels/autocomplete',
  SearchHotels = 'v2/hotels/search',
  HotelDetail = 'hotels/detail',
  HotelSelectRoom = 'v2/hotels/select-room',
  HotelPreBook = 'v2/hotels/pre-book',
  HotelOrder = 'v2/hotels/order',

  // RENTAL CAR

  CountriesSearch = 'v1/countries/search-cities',
  SearchCars = 'v1/rentcar/search',
  CarDetail = '/v1/rentcar/car',
  RentCarOrder = 'v1/rentcar/order',
  CheckLocation = 'v1/rentcar/check-location',

  // FEEDBACK
  FeedbacksCreate = 'feedback',
  Feedbacks = 'feedback/product',
  Rating = 'feedback/rating',

  // UPLOAD
  UploadFile = 'upload/file',

  // COMMON
  CancelTime = 'cancellation-time',
  CalculatePrice = 'calculate-price',
  Order = 'order',
}

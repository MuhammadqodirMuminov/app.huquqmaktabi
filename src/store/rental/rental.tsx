import { create } from 'zustand';

import { createSelectors } from '../util';

import { EOrderPaymentType, IRentalCarStore } from '@/types/rental';

const initialState = {
  paymentType: EOrderPaymentType.Card,
  locationType: null,
  isReturnSameLocation: true,
  price: 0,
  serviceCounts: {
    driver: 0,
    insurance: 0,
  },
  returnLocation: null,
  pickupLocation: null,
  boundaryId: null,
};

const useRentalCar = create<IRentalCarStore>()((set) => ({
  isSearch: false,
  countryId: null,
  ...initialState,

  setIsSearch: (isSearch) => set(() => ({ isSearch })),
  setBoundaryId: (boundaryId) => set(() => ({ boundaryId })),
  resetState: () => set((state) => ({ ...state, ...initialState })),
  setReturnLocation: (returnLocation) => set(() => ({ returnLocation })),
  setPickupLocation: (pickupLocation) => set(() => ({ pickupLocation })),
  setIsReturnSameLocation: (isReturnSameLocation) =>
    set(() => ({ isReturnSameLocation })),
  setCountryId: (countryId) => set(() => ({ countryId })),
  setPaymentType: (paymentType) => set(() => ({ paymentType })),
  setLocationType: (locationType) => set(() => ({ locationType })),
  setPrice: (price) => set(() => ({ price })),
  setServiceCounts: (type, checked = null, days, dailyPrice) =>
    set((state) => {
      let newPrice = state.price;
      if (checked && checked !== null) {
        newPrice += days * dailyPrice;
      } else if (checked !== null) {
        newPrice -= days * dailyPrice;
      }

      return {
        serviceCounts: {
          ...state.serviceCounts,
          [type]: checked ? 1 : 0,
        },
        price: newPrice,
      };
    }),
}));

export const useRentalCarStore = createSelectors(useRentalCar);

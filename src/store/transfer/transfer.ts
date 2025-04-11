import { create } from 'zustand';

import { createSelectors } from '../util';

import type { ITransferStore } from '@/types/transfer';

const useTransfer = create<ITransferStore>()((set) => ({
  hours: 2,
  isMap: false,
  isTime: false,
  center: { lat: 41.311158, lng: 69.279737 },
  select: undefined,
  category: null,
  currentCar: null,
  transferType: 'RIDE',
  pickUpLocation: {
    name: '',
  },
  destinationLocation: {
    name: '',
  },
  routeInformation: null,
  details: null,

  setIsMap: (isMap) => set(() => ({ isMap })),
  setHours: (hours) => set(() => ({ hours })),
  setIsTime: (isTime) => set(() => ({ isTime })),
  setCenter: (center) => set(() => ({ center })),
  setSelect: (select) => set(() => ({ select })),
  setCategory: (category) => set(() => ({ category })),
  setCurrentCar: (currentCar) => set(() => ({ currentCar })),
  setTransferType: (transferType) => set(() => ({ transferType })),
  setRouteInformation: (routeInformation) => set(() => ({ routeInformation })),
  setDestinationLocation: (destinationLocation) =>
    set(() => ({ destinationLocation })),
  setPickUpLocation: (pickUpLocation) => set(() => ({ pickUpLocation })),
  setDetails: (details) => set(() => ({ details })),
}));

export const useTransferStore = createSelectors(useTransfer);

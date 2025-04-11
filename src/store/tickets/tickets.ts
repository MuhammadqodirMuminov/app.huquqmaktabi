import { create } from 'zustand';

import { createSelectors } from '../util';

import {
  ECabins,
  EFlight,
  type ITicketsStore,
  type TPassengerType,
} from '@/types/tickets';

const useTickets = create<ITicketsStore>()((set) => ({
  formData: null,
  filteredData: null,
  isFiltered: false,
  isChart: false,
  isFilter: false,
  isAirlines: false,
  isCabin: false,
  flightType: EFlight.OneWay,
  departureDate: null,
  cabin: ECabins.Economy,
  passengerCounts: {
    adults: 1,
    children: 0,
    infants: 0,
  },

  setFilteredData: (filteredData) =>
    set(() => {
      return { filteredData, isFiltered: true };
    }),
  setFormData: (formData) => set(() => ({ formData })),
  setCabin: (cabin) => set(() => ({ cabin })),
  setIsChart: (isChart) => set(() => ({ isChart })),
  setIsCabin: (isCabin) => set(() => ({ isCabin })),
  setIsFilter: (isFilter) => set(() => ({ isFilter })),
  setIsAirlines: (isAirlines) => set(() => ({ isAirlines })),
  setInfants: (infants: number) =>
    set((state) => ({
      ...state,
      passengerCounts: {
        ...state.passengerCounts,
        infants,
      },
    })),
  setFlightType: (flightType) => set(() => ({ flightType })),
  setDepartureDate: (departureDate) => set(() => ({ departureDate })),
  setPassengerCounts: (type: TPassengerType, increment: boolean) =>
    set((state) => {
      let newCount = state.passengerCounts[type] + (increment ? 1 : -1);

      if (type === 'adults' && newCount < 1) {
        return state;
      }

      const totalSeated =
        state.passengerCounts.adults +
        state.passengerCounts.children +
        (type === 'adults' || type === 'children' ? (increment ? 1 : -1) : 0);

      if (totalSeated > 9) {
        return state;
      }

      if (type === 'infants' && newCount > state.passengerCounts.adults) {
        return state;
      }

      if (newCount < 0 && (type === 'children' || type === 'infants')) {
        newCount = 0;
      }

      return {
        passengerCounts: {
          ...state.passengerCounts,
          [type]: newCount,
        },
      };
    }),
}));

export const useTicketsStore = createSelectors(useTickets);

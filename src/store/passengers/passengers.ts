import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createSelectors } from '../util';

import type { IPassengersStore } from '@/types/passengers';

const usePassengers = create<IPassengersStore>()(
  persist(
    (set) => ({
      passengers: [],

      addPassenger: (passenger) =>
        set((state) => ({ passengers: [...state.passengers, passenger] })),

      removePassenger: (index) =>
        set((state) => ({
          passengers: state.passengers.filter((_, i) => i !== index),
        })),

      editPassenger: (index, passenger) =>
        set((state) => ({
          passengers: state.passengers.map((p, i) =>
            i === index ? passenger : p,
          ),
        })),
    }),
    {
      name: 'passengers',
    },
  ),
);

export const usePassengersStore = createSelectors(usePassengers);

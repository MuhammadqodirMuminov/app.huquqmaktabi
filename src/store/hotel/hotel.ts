import { create } from 'zustand';

import { createSelectors } from '../util';

import type { IHotelStore } from '@/types/hotel';
import { history } from '@/utils/history';
import { SEARCH_KEYS } from '@/constants';
import { KEYS } from '@/common';
import { storage } from '@/utils/storage';

const getInitialGuests = () => {
  const searchParams = new URLSearchParams(history.location.search);
  const params = searchParams.get(SEARCH_KEYS.values);

  if (params) {
    const { adultsCount, childrenAges, roomCount } = JSON.parse(params);
    return {
      adultsCount,
      childrenAges,
      roomCount,
    };
  }
  return {
    roomCount: 1,
    adultsCount: 2,
    childrenAges: [],
  };
};

const useHotel = create<IHotelStore>()((set, get) => ({
  guests: getInitialGuests(),
  typeId: storage.getItem(KEYS.typeId),
  place: '',
  formData: {} as IHotelStore['formData'],
  isSearch: false,
  isFilter: false,
  isGallery: false,
  isDetails: false,
  roomImage: '',
  roomImages: [],
  roomDetails: {} as IHotelStore['roomDetails'],
  preBookData: null,
  roomData: storage.getItem(KEYS.roomData) as IHotelStore['roomData'],
  selectedOtherRoom: null,
  selectedLetsTripRooms: {},

  setPlace: (place) => set(() => ({ place })),
  setTypeId: (typeId) =>
    set(() => {
      storage.setItem(KEYS.typeId, typeId);
      return { typeId };
    }),
  setIsSearch: (isSearch) => set(() => ({ isSearch })),
  setIsFilter: (isFilter) => set(() => ({ isFilter })),
  setFormData: (formData) => set(() => ({ formData })),
  setRoomImage: (roomImage) => set(() => ({ roomImage })),
  setIsGallery: (isGallery) => set(() => ({ isGallery })),
  setRoomImages: (roomImages) => set(() => ({ roomImages })),
  setPreBookData: (preBookData) => set(() => ({ preBookData })),
  setRoomData: (roomData) =>
    set(() => {
      storage.setItem(KEYS.roomData, roomData);
      return { roomData };
    }),
  handleRoomChange: (increment: boolean) =>
    set((state) => {
      const { roomCount, adultsCount, childrenAges } = state.guests;

      if (increment) {
        if (roomCount < 6) {
          const newRoomCount = roomCount + 1;
          const newAdultsCount = Math.max(adultsCount, newRoomCount);

          return {
            guests: {
              ...state.guests,
              roomCount: newRoomCount,
              adultsCount: newAdultsCount,
            },
          };
        }
      } else {
        if (roomCount > 1) {
          const newRoomCount = roomCount - 1;
          const newAdultsCount = Math.min(adultsCount, newRoomCount * 6);
          const newChildrenAges = childrenAges.slice(0, newRoomCount * 4);

          return {
            guests: {
              ...state.guests,
              roomCount: newRoomCount,
              adultsCount: newAdultsCount,
              childrenAges: newChildrenAges,
            },
          };
        }
      }

      return state;
    }),

  handleAdultChange: (increment: boolean) =>
    set((state) => {
      const { adultsCount, roomCount } = state.guests;
      const newAdults = increment ? adultsCount + 1 : adultsCount - 1;

      let newRoomCount = roomCount;

      if (newAdults > roomCount * 6 && roomCount < 6) {
        newRoomCount += 1;
      } else if (newAdults < roomCount * 6 && newAdults < roomCount) {
        newRoomCount = Math.max(Math.ceil(newAdults / 6), 1);
      }

      return {
        guests: {
          ...state.guests,
          adultsCount: Math.max(
            newRoomCount,
            Math.min(newAdults, newRoomCount * 6),
          ),
          roomCount: newRoomCount,
        },
      };
    }),
  handleChildChange: (increment: boolean) =>
    set((state) => {
      const { roomCount, childrenAges } = state.guests;
      const maxChildren = roomCount * 4;
      const updatedChildrenAges = [...childrenAges];

      if (increment) {
        if (updatedChildrenAges.length < maxChildren) {
          updatedChildrenAges.push(0);
        } else if (roomCount < 6) {
          updatedChildrenAges.push(0);

          return {
            guests: {
              ...state.guests,
              roomCount: roomCount + 1,
              childrenAges: updatedChildrenAges,
            },
          };
        }
      } else {
        updatedChildrenAges.pop();
        const newRoomCount = Math.ceil(updatedChildrenAges.length / 4) || 1;

        return {
          guests: {
            ...state.guests,
            roomCount: newRoomCount,
            childrenAges: updatedChildrenAges,
          },
        };
      }

      return {
        guests: {
          ...state.guests,
          childrenAges: updatedChildrenAges,
        },
      };
    }),
  handleAgeChange: (value: number, childIndex: number) =>
    set((state) => {
      const updatedChildrenAges = [...state.guests.childrenAges];

      if (childIndex < updatedChildrenAges.length) {
        updatedChildrenAges[childIndex] = value;
      }

      return {
        guests: {
          ...state.guests,
          childrenAges: updatedChildrenAges,
        },
      };
    }),

  selectOtherRoom: (bookHash) => set({ selectedOtherRoom: bookHash }),
  setSelectedLetsTripRooms: (updatedRooms) =>
    set({ selectedLetsTripRooms: updatedRooms }),
  toggleLetsTripRoom: (group, roomId) =>
    set((state) => {
      const updatedRooms = { ...state.selectedLetsTripRooms };

      if (updatedRooms[group] === roomId) {
        updatedRooms[group] = null;
      } else {
        updatedRooms[group] = roomId;
      }

      return { selectedLetsTripRooms: updatedRooms };
    }),

  initializeLetsTripRooms: (groups) =>
    set((state) => {
      const selectedRooms = { ...state.selectedLetsTripRooms };

      groups.forEach(({ group, rooms }) => {
        if (rooms.length === 1) {
          selectedRooms[group] = rooms[0].id;
        }
      });

      return { selectedLetsTripRooms: selectedRooms };
    }),

  handleOpenDetailsDrawer: (room) =>
    set({ isDetails: true, roomDetails: room }),
  handleCloseDetailsDrawer: () => set({ isDetails: false, roomDetails: null }),

  getTotalGuests: () => {
    const { guests: initialGuests } = get();

    return initialGuests.adultsCount + initialGuests.childrenAges.length;
  },
}));

export const useHotelStore = createSelectors(useHotel);

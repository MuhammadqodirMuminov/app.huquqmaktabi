import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

import { Endpoints } from './endpoints';

import type { TData, TSingleParam } from '@/types/api';
import type {
  THotelAutocompleteData,
  THotelDetail,
  THotelRoomData,
  THotelSearchValues,
  THotelData,
  THotelRoomParams,
  TPreBookData,
  TCreatesOrderValues,
  TCreateOrderResponse,
  TLetsTripGroups,
  TOtherHotelGroups,
} from '@/types/hotel';
import { api } from '@/api';
import { getRoute } from '@/utils/general';

const searchAutoCompleteHotels = async (
  search: string,
): Promise<THotelAutocompleteData> =>
  (await api.get(Endpoints.HotelAutoComplete, { params: { search } })).data;

const searchHotels = async (
  params: THotelSearchValues,
): Promise<TData<THotelData[]>> =>
  (await api.get(Endpoints.SearchHotels, { params })).data;

const selectHotelRoom = async (
  params: THotelSearchValues,
): Promise<THotelRoomData<TLetsTripGroups | TOtherHotelGroups>> =>
  (await api.get(Endpoints.HotelSelectRoom, { params })).data;

const getHotelDetail = async (id: TSingleParam): Promise<THotelDetail> =>
  (await api.get(getRoute(Endpoints.HotelDetail, id))).data;

const hotelPreBook = async (params: THotelRoomParams): Promise<TPreBookData> =>
  (await api.post(Endpoints.HotelPreBook, params)).data;

const createHotelOrder = async (
  params: TCreatesOrderValues,
): Promise<TCreateOrderResponse> =>
  (await api.post(Endpoints.HotelOrder, params)).data;

export const useGetAutoComplete = (searchTerm: string) =>
  useQuery<THotelAutocompleteData>({
    queryKey: [Endpoints.HotelAutoComplete, searchTerm],
    queryFn: () => searchAutoCompleteHotels(searchTerm),
    enabled: Boolean(searchTerm),
  });

export const useGetHotelDetailQuery = (id: TSingleParam) =>
  useQuery<THotelDetail>({
    queryKey: [Endpoints.HotelDetail, id],
    queryFn: () => getHotelDetail(id),
    staleTime: 0,
  });

export const useGetHotelSelectRoom = (params: THotelSearchValues) =>
  useQuery({
    queryKey: [
      Endpoints.HotelSelectRoom,
      params.hotelId,
      params.checkIn,
      params.checkOut,
      params.guests,
      params.residency,
      params,
    ],
    queryFn: () => selectHotelRoom(params),
    staleTime: 0,
  });

export const useHotelPreBook = (onSuccess: (data: TPreBookData) => void) =>
  useMutation({
    mutationFn: hotelPreBook,
    onSuccess,
  });

export const useCreateHotelOrder = (
  onSuccess: (data: TCreateOrderResponse) => void,
) =>
  useMutation({
    mutationFn: createHotelOrder,
    onSuccess,
  });

export const useGetInfiniteHotelsQuery = (params: THotelSearchValues) =>
  useInfiniteQuery<TData<THotelData[]>>({
    queryKey: [
      Endpoints.SearchHotels,
      params.locationId || params.hotelId,
      params.checkIn,
      params.checkOut,
      params.adultsCount,
      params.childrenAges,
      params.roomCount,
      params.residency,
      params,
    ],
    queryFn: ({ pageParam }) =>
      searchHotels({ page: pageParam as number, ...params }),
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasNext === false ? undefined : pages.length,
    initialPageParam: 0,
    staleTime: 0,
  });

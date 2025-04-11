import { useMutation, useQuery } from '@tanstack/react-query';

import { Endpoints } from './endpoints';

import { api } from '@/api';
import {
  TCarData,
  TSearchCountry,
  TCarSearchParam,
  CarDetail,
  TCreateRentCarOrder,
  TCreateRentCarOrderResponse,
} from '@/types/rental';
import { TData, TSingleParam } from '@/types/api';
import { getRoute, toQueryParams } from '@/utils/general';
import { TLocation } from '@/types/hotel';

const searchCountries = async (name: string): Promise<TSearchCountry[]> =>
  (await api.get(Endpoints.CountriesSearch, { params: { name } })).data;

const searchCars = async (
  params: TCarSearchParam,
): Promise<TData<TCarData[]>> =>
  (await api.get(Endpoints.SearchCars, { params: toQueryParams(params) })).data;

const checkLocation = async (params: TLocation): Promise<any> =>
  (await api.get(Endpoints.CheckLocation, { params: params })).data;

const getCarDetail = async (
  id: TSingleParam,
  params: TCarSearchParam,
): Promise<CarDetail> =>
  (await api.get(getRoute(Endpoints.CarDetail, id), { params })).data;

const createRentalCarOrder = async (
  params: TCreateRentCarOrder,
): Promise<TCreateRentCarOrderResponse> =>
  (await api.post(Endpoints.RentCarOrder, params)).data;

export const useGetCountriesQuery = (searchTerm: string) =>
  useQuery<TSearchCountry[]>({
    queryKey: [Endpoints.CountriesSearch, searchTerm],
    queryFn: () => searchCountries(searchTerm),
    enabled: Boolean(searchTerm),
  });

export const useGetCarsQuery = (params: TCarSearchParam) =>
  useQuery({
    queryKey: [
      Endpoints.SearchCars,
      params,
      params?.carTypes,
      params?.endDate,
      params?.startDate,
    ],
    queryFn: () => searchCars(params),
    staleTime: 0,
  });

export const useGetCarDetailQuery = (
  id: TSingleParam,
  params: TCarSearchParam,
) =>
  useQuery<CarDetail>({
    queryKey: [Endpoints.HotelDetail, id, params],
    queryFn: () => getCarDetail(id, params),
    staleTime: 0,
  });

export const useCreateRentalCarOrder = (
  onSuccess: (data: TCreateRentCarOrderResponse) => void,
) =>
  useMutation({
    mutationFn: createRentalCarOrder,
    onSuccess,
  });

export const useCheckLocation = (params: TLocation) =>
  useQuery<any>({
    queryKey: [
      Endpoints.CheckLocation,
      params.latitude,
      params.longitude,
      params,
    ],
    queryFn: () => checkLocation(params),
    staleTime: 0,
    enabled: params.latitude !== 0,
  });

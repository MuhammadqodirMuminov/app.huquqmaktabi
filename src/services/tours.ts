import {
  skipToken,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { api } from '../api';
import { Endpoints } from './endpoints';

import type { TData, TSingleParam } from '@/types/api';
import type {
  IGetCancelTimeParams,
  IGetToursByCountryParams,
  ITourCalculatePriceBody,
  TCountry,
  TCreateOrderResponse,
  TCreateOrderValues,
  TCreateOrderValuesV2,
  TTourCalculatePriceResponse,
  TTourCancelTimeResponse,
  TTourGroup,
} from '@/types/tours';
import { getRoute } from '@/utils/general';

const getCountries = async (): Promise<TData<TCountry[]>> =>
  (await api.get(Endpoints.TourCountries, { params: { page: 0, size: 100 } }))
    .data;

const getTours = async (
  countryId: TSingleParam,
): Promise<TData<TTourGroup[]>> =>
  (
    await api.get(
      getRoute(Endpoints.Excursions, Endpoints.ByCountry, countryId),
      {
        params: { page: 0, size: 8, sort: 'createdAt' },
      },
    )
  ).data;

const getInfiniteTours = async (
  params: IGetToursByCountryParams,
): Promise<TData<TTourGroup[]>> =>
  (
    await api.get(
      getRoute(Endpoints.Excursions, Endpoints.ByCountry, params.countryId),
      { params },
    )
  ).data;

const getTourGroup = async (id: TSingleParam): Promise<TTourGroup> =>
  (await api.get(getRoute(Endpoints.Excursions, id))).data;

const getCancelTime = async (
  params: IGetCancelTimeParams,
): Promise<TTourCancelTimeResponse> =>
  (
    await api.get(
      getRoute(
        Endpoints.Excursions,
        params.excursionId,
        Endpoints.CancelTime,
        `?startDate=${params.startDate}`,
      ),
    )
  ).data;

const createTourOrder = async (
  params: TCreateOrderValues,
): Promise<TCreateOrderResponse> =>
  (await api.post(Endpoints.CreateTourOder, params)).data;

const createTourOrderV2 = async (
  data: TCreateOrderValuesV2,
): Promise<TCreateOrderResponse> =>
  (await api.post(getRoute(Endpoints.Excursions, Endpoints.Order), data)).data;

const calculatePrice = async (
  body: ITourCalculatePriceBody,
): Promise<TTourCalculatePriceResponse> =>
  (
    await api.post(
      getRoute(Endpoints.Excursions, Endpoints.CalculateExcursionPrice),
      body,
    )
  ).data;

export const useGetCountriesQuery = () =>
  useSuspenseQuery<TData<TCountry[]>>({
    queryKey: [Endpoints.TourCountries],
    queryFn: getCountries,
    staleTime: 0,
  });

export const useGetTourQuery = (id: TSingleParam) =>
  useQuery<TTourGroup>({
    queryKey: [Endpoints.Excursions, id],
    queryFn: async () => getTourGroup(id),
  });

export const useGetToursQuery = (countryId: TSingleParam) =>
  useQuery<TData<TTourGroup[]>>({
    queryKey: [Endpoints.Excursions, countryId],
    queryFn: async () => getTours(countryId),
  });

export const useGetInfiniteToursQuery = (countryId: TSingleParam) =>
  useInfiniteQuery<TData<TTourGroup[]>>({
    queryKey: [Endpoints.Excursions, countryId],
    queryFn: ({ pageParam }) =>
      getInfiniteTours({ page: pageParam as number, size: 6, countryId }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.content?.length ? allPages.length : null,
    initialPageParam: 0,
    staleTime: 0,
  });

export const useCreateTourOrder = (
  onSuccess: (data: TCreateOrderResponse) => void,
) =>
  useMutation({
    mutationFn: createTourOrder,
    onSuccess,
  });

export const useCreateTourOrderV2 = (
  onSuccess: (data: TCreateOrderResponse) => void,
) =>
  useMutation({
    mutationFn: createTourOrderV2,
    onSuccess,
  });

export const useTourCancelTime = ({
  startDate,
  excursionId: tourId,
  enabled = true,
}: Partial<IGetCancelTimeParams>) =>
  useQuery({
    queryKey: [startDate, tourId],
    queryFn:
      startDate && tourId && enabled
        ? () =>
            getCancelTime({
              startDate: startDate,
              excursionId: tourId,
            })
        : skipToken,
  });

export const useTourCalculatePriceQuery = (
  onSuccess?: (data: TTourCalculatePriceResponse) => void,
) =>
  useMutation({
    mutationFn: calculatePrice,
    onSuccess,
  });

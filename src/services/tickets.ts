import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

import { Endpoints } from './endpoints';

import type {
  ITicketSearchBody,
  TSearchAirlineData,
  TSearchAirlineParams,
  ITicketSearchParam,
  TTicketsData,
  TFlightOffersPricing,
  TTicketsOfferBody,
} from '@/types/tickets';
import { api } from '@/api';

const getTicketOffers = async (
  body: ITicketSearchBody,
  params: ITicketSearchParam,
): Promise<TTicketsData> =>
  (await api.post(Endpoints.TicketOffers, body, { params })).data;

const getTicketDetail = async (
  body: TTicketsOfferBody,
): Promise<TFlightOffersPricing> =>
  (await api.post(Endpoints.TicketPricing, body)).data;

const searchAirline = async (
  params: TSearchAirlineParams,
): Promise<TSearchAirlineData[]> =>
  (await api.get(Endpoints.SearchAirline, { params })).data;

export const useGetSearchAirline = (params: TSearchAirlineParams) =>
  useQuery<TSearchAirlineData[]>({
    queryKey: [Endpoints.SearchAirline, params.name, params],
    queryFn: () => searchAirline(params),
    gcTime: 0,
    staleTime: 0,
    enabled: !!params.name,
  });

export const useGetInfiniteTicketsQuery = (
  body: ITicketSearchBody,
  params: ITicketSearchParam,
) =>
  useInfiniteQuery<TTicketsData>({
    queryKey: [body, params],
    queryFn: ({ pageParam }) =>
      getTicketOffers(body, { page: pageParam as number, ...params }),
    getNextPageParam: (lastPage, pages) =>
      lastPage.data.length ? pages.length : undefined,
    initialPageParam: 0,
    staleTime: 0,
  });

export const useGetTicketDetail = (
  onSuccess: (data: TFlightOffersPricing) => void,
) =>
  useMutation({
    mutationFn: getTicketDetail,
    onSuccess,
  });

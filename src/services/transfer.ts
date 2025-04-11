import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { api } from '../api';
import { Endpoints } from './endpoints';

import {
  TCreateTransferResponse,
  TCreateTransferOrder,
  TStripePayment,
  TLink,
  TBoundaryData,
  TBoundaryParams,
  TGetTransferCategoryParams,
  TRouteExists,
  TCheckRouteResponse,
  TTransferCategory,
} from '@/types/transfer';
import { GOOGLE_API_KEY } from '@/constants';

export const getAddress = async ({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}): Promise<string> => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`,
  );
  return data?.results?.[0]?.formatted_address;
};

const createTransfer = async (
  body: TCreateTransferOrder,
): Promise<TCreateTransferResponse> =>
  (await api.post(Endpoints.CreateTransfer, body)).data;

const transferPayment = async (body: TStripePayment): Promise<TLink> =>
  (await api.post(Endpoints.PaymentTransfer, body)).data;

const getBoundaries = async (params: TBoundaryParams): Promise<TBoundaryData> =>
  (
    await api.get(Endpoints.TransferBoundaries, {
      params: { longitude: params.longitude, latitude: params.latitude },
    })
  ).data;

const getTransferCategory = async (
  params: TGetTransferCategoryParams,
): Promise<TTransferCategory[]> =>
  (
    await api.get(Endpoints.TransferCategory, {
      params,
    })
  ).data.filter((car: TTransferCategory) => car.cars.length > 0);

const checkRouteExists = async (
  params: TRouteExists,
): Promise<TCheckRouteResponse> =>
  (
    await api.get(
      `${Endpoints.RouteExists}/${params.sourceBoundary}/destination-boundary/${params.destinationBoundary}`,
    )
  ).data;

export const useCreateTransferQuery = (
  onSuccess: (data: TCreateTransferResponse) => void,
) =>
  useMutation({
    mutationFn: createTransfer,
    onSuccess,
  });

export const useTransferPayment = (onSuccess: (data: TLink) => void) =>
  useMutation({
    mutationFn: transferPayment,
    onSuccess,
  });

export const useGetBoundary = (params: TBoundaryParams) =>
  useQuery<TBoundaryData>({
    queryKey: [
      Endpoints.TransferBoundaries,
      params.latitude,
      params.longitude,
      params,
    ],
    queryFn: () => getBoundaries(params),
    staleTime: 0,
    gcTime: 0,
    enabled: !!params.latitude && !!params.longitude,
  });

export const useGetTransferCars = (params: TGetTransferCategoryParams) =>
  useQuery<TTransferCategory[]>({
    queryKey: [
      Endpoints.TransferCategory,
      params.destinationsBoundaryId,
      params.sourceBoundaryId,
      params,
    ],
    queryFn: () => getTransferCategory(params),
    staleTime: 0,
    gcTime: 0,
    // enabled: !!(params.destinationsBoundaryId && params.sourceBoundaryId),
  });

export const useCheckRouteExists = (params: TRouteExists) => {
  return useQuery<TCheckRouteResponse>({
    queryKey: [
      Endpoints.RouteExists,
      params.sourceBoundary,
      params.destinationBoundary,
      params,
    ],
    queryFn: () => checkRouteExists(params),
    enabled:
      params.sourceBoundary !== 'undefined' &&
      params.destinationBoundary !== 'undefined' &&
      Boolean(params.sourceBoundary && params.destinationBoundary),
  });
};

import { useQuery } from '@tanstack/react-query';

import { Endpoints } from './endpoints';

import type { IGetAmountParams, TAmountData } from '@/types/app';
import { api } from '@/api';

const getAmount = async (params: IGetAmountParams): Promise<TAmountData> =>
  (await api.get(Endpoints.GetAmount, { params })).data;

export const useGetAmountQuery = (params: IGetAmountParams) =>
  useQuery<TAmountData>({
    queryKey: [
      Endpoints.GetAmount,
      params.lat,
      params.lng,
      params.referralCode,
      params,
    ],
    queryFn: () => getAmount(params),
    staleTime: 0,
  });

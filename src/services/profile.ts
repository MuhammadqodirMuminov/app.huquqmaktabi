import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Endpoints } from './endpoints';
import { getAuthEndpoint } from './utils';

import type {
  IPagination,
  TData,
  TPaymentResponse,
  TSingleParam,
} from '@/types/api';
import type { TUser } from '@/types/auth';
import type {
  IUserOrderParams,
  TAccountHistory,
  TFillBalanceValues,
  TOrder,
  TUpdateDeviceLanguageBody,
  TUpdateUserValues,
  TUserOrder,
} from '@/types/profile';
import { getRoute } from '@/utils/general';

const updateUser = async (body: TUpdateUserValues): Promise<TUser> =>
  (await api.patch(getAuthEndpoint(Endpoints.UpdateUser), body)).data;

const updateProfileImage = async (file: FormData): Promise<TUser> =>
  (await api.post(getRoute('v1/users', Endpoints.UpdateProfileImage), file))
    .data;

const deleteProfileImage = async (): Promise<TUser> =>
  (await api.delete(getRoute('v1/users', Endpoints.DeleteProfileImage))).data;

const fillBalance = async (
  body: TFillBalanceValues,
): Promise<TPaymentResponse> =>
  (await api.post(Endpoints.FillBalance, body)).data;

const getAccountHistory = async (): Promise<TData<TAccountHistory[]>> =>
  (await api.get(Endpoints.AccountHistory)).data;

const getUserOrder = async (id: TSingleParam): Promise<any> =>
  (await api.get(getRoute(Endpoints.Orders, id))).data;

const getUserOrders = async (params: IUserOrderParams): Promise<TUserOrder> =>
  (await api.get(getRoute(Endpoints.Orders, 'user-orders'), { params })).data;

const updateDeviceLanguage = async (
  body: TUpdateDeviceLanguageBody,
): Promise<void> =>
  (await api.patch(Endpoints.UpdateDeviceLanguage, body)).data;

export const useUpdateUserQuery = (onSuccess: (data: TUser) => void) =>
  useMutation({
    mutationFn: updateUser,
    onSuccess,
  });

export const useUpdateProfileImageQuery = (onSuccess: (data: TUser) => void) =>
  useMutation({
    mutationFn: updateProfileImage,
    onSuccess,
  });

export const useDeleteProfileImageQuery = (onSuccess: (data: TUser) => void) =>
  useMutation({
    mutationFn: deleteProfileImage,
    onSuccess,
  });

export const useFillBalanceQuery = (
  onSuccess: (data: TPaymentResponse) => void,
) =>
  useMutation({
    mutationFn: fillBalance,
    onSuccess,
  });

export const useGetAccountHistory = () =>
  useQuery<TData<TAccountHistory[]>>({
    queryKey: [Endpoints.AccountHistory],
    queryFn: getAccountHistory,
    staleTime: 0,
  });

export const useGetUserOrders = (
  params: Omit<IUserOrderParams, keyof IPagination>,
) =>
  useInfiniteQuery({
    queryKey: [
      getRoute(Endpoints.Orders, 'user-orders'),
      params.orderStatus,
      params.isActive,
      params,
    ],
    queryFn: ({ pageParam }) =>
      getUserOrders({
        page: Number(pageParam),
        size: 10,
        isActive: params.isActive,
        orderStatus: params.orderStatus,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.content.length ? allPages?.length : undefined,
    staleTime: 0,
    select: (data) => data.pages.flatMap((page) => page?.content) ?? [],
  });

export const useGetOrder = (id: TSingleParam) =>
  useQuery<TOrder>({
    queryKey: [Endpoints.Orders, id],
    queryFn: () => getUserOrder(id),
    staleTime: 0,
  });

export const useUpdateDeviceLanguageQuery = (onSettled?: () => void) =>
  useMutation({
    mutationFn: updateDeviceLanguage,
    onSettled,
    meta: {
      preventGlobalError: true,
    },
  });

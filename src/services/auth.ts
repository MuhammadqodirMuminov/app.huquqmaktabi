import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { api } from '../api';
import { Endpoints } from './endpoints';
import { getAuthEndpoint } from './utils';

import type {
  ISuccessResponse,
  TAuthValues,
  TCountriesData,
  TLogoutBody,
  TOtpBody,
  TUser,
} from '@/types/auth';

const getMe = async (): Promise<TUser> =>
  (await api.get(getAuthEndpoint(Endpoints.GetMe))).data;

const sign = async (body: TAuthValues): Promise<ISuccessResponse> =>
  await api.post(getAuthEndpoint(Endpoints.Sign), body);

const sendOtp = async (body: TOtpBody): Promise<ISuccessResponse> =>
  await api.post(getAuthEndpoint(Endpoints.Otp), body);

const verify = async (body: TOtpBody): Promise<ISuccessResponse> =>
  await api.post(getAuthEndpoint(Endpoints.Verify), body);

const deleteAccount = async (params: TAuthValues): Promise<string> =>
  (await api.delete(getAuthEndpoint(Endpoints.DeleteAccount), { params })).data;

const logout = async (body: TLogoutBody): Promise<void> =>
  (await api.post(Endpoints.Logout, body)).data;

const getCountries = async (search: string): Promise<TCountriesData[]> =>
  (
    await axios.get(
      `https://restcountries.com/v3.1/${search ? `translation/${search}` : 'all'}?fields=name,label,cca2,flags`,
    )
  ).data;

export const useGetMeQuery = (hasUser: boolean) =>
  useQuery<TUser>({
    queryKey: [Endpoints.GetMe, hasUser],
    queryFn: getMe,
    enabled: hasUser,
    staleTime: 0,
  });

export const useSignQuery = (onSuccess: (data: ISuccessResponse) => void) =>
  useMutation({
    mutationFn: sign,
    onSuccess,
  });

export const useSendOtpQuery = (onSuccess: (data: ISuccessResponse) => void) =>
  useMutation({
    mutationFn: sendOtp,
    onSuccess,
  });

export const useVerifyQuery = (onSuccess: (data: ISuccessResponse) => void) =>
  useMutation({
    mutationFn: verify,
    onSuccess,
  });

export const useDeleteAccountQuery = (onSuccess: (data: string) => void) =>
  useMutation({
    mutationFn: deleteAccount,
    onSuccess,
  });

export const useGetCountriesQuery = (search: string) =>
  useQuery<TCountriesData[]>({
    queryKey: ['countries', search],
    queryFn: () => getCountries(search),
    staleTime: 0,
  });

export const useLogoutQuery = (onSettled: () => void) =>
  useMutation({
    mutationFn: logout,
    onSettled,
  });

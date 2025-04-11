import { useMutation } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

import { Endpoints } from './endpoints';

import { TUploadFileResponse } from '@/types/app';
import { api } from '@/api';

const uploadFile = (
  formData: FormData,
  onUploadProgress: AxiosRequestConfig['onUploadProgress'],
): Promise<TUploadFileResponse> =>
  api
    .post(Endpoints.UploadFile, formData, {
      onUploadProgress,
    })
    .then((res) => res.data);

type Params = {
  formData: FormData;
  id: number;
  onProgress: AxiosRequestConfig['onUploadProgress'];
};

export const useUploadFileQuery = (
  onSuccess: (data: TUploadFileResponse, variables: Params) => void,
) =>
  useMutation({
    mutationFn: ({ formData, onProgress }: Params) =>
      uploadFile(formData, onProgress),
    onSuccess,
  });

import {
  useMutation,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { Endpoints } from './endpoints';

import { api } from '@/api';
import { TData } from '@/types/api';
import {
  ICreateFeedbackBody,
  IGetFeedbackParams,
  IGetRatingParams,
  TCreateFeedbackResponse,
  TFeedbackData,
  TRatingData,
} from '@/types/feedback';
import { getRoute } from '@/utils/general';

const getFeedbacks = (
  params: IGetFeedbackParams,
): Promise<TData<TFeedbackData[]>> =>
  api.get(getRoute(Endpoints.Feedbacks, params.productId), { params }).then(
    (res) => res.data,
    () => null,
  );

const getRating = (params: IGetRatingParams): Promise<TRatingData> =>
  api.get(getRoute(Endpoints.Rating, params.productId), { params }).then(
    (res) => res.data,
    () => null,
  );

const createFeedback = ({
  rating,
  ...body
}: ICreateFeedbackBody): Promise<TCreateFeedbackResponse> =>
  api
    .post(getRoute(Endpoints.FeedbacksCreate), {
      ...body,
      star: rating,
    })
    .then((res) => res.data);

export const useFeedbacksQuery = (
  { page, ...params }: IGetFeedbackParams,
  single: boolean = false,
) =>
  useSuspenseInfiniteQuery({
    queryKey: ['feedbacks', params],
    queryFn: ({ pageParam }) =>
      getFeedbacks({
        page: pageParam,
        ...params,
      }),
    getNextPageParam: (lastPage, pages) =>
      single || lastPage?.last === true ? undefined : pages?.length,
    initialPageParam: page ?? 0,
  });

export const useRatingQuery = (params: IGetRatingParams) =>
  useSuspenseQuery({
    queryKey: ['rating', params],
    queryFn: () => getRating(params),
  });

export const useFeedbackCreateQuery = (
  onSuccess: (
    data: TCreateFeedbackResponse,
    variables: ICreateFeedbackBody,
  ) => void,
) =>
  useMutation({
    mutationFn: createFeedback,
    onSuccess,
  });

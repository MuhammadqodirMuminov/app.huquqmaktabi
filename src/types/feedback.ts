export type TFeedbackType =
  | 'HOTEL'
  | 'TOUR'
  | 'TRANSFER'
  | 'FLIGHT'
  | (string & {});

export type IGetFeedbackParams = {
  productId: string;
  page?: number;
  size?: number;
  userId?: number;
  type: TFeedbackType;
  hasImages?: boolean;
};

export type TFeedbackData = {
  id: number;
  login: string;
  fullName: string;
  pictureUrl?: string;
  title: string;
  star: number;
  state: string;
  productId: number;
  type: string;
  createdAt: string;
  confirmedAt: string;
  country?: string;
  feedbackImages: string[];
};

export type IGetRatingParams = {
  productId: string;
  type: TFeedbackType;
};

export type TRatingData = {
  id: number;
  productId: number;
  feedbackCount: number;
  averageStar: number;
  oneStarCount: number;
  twoStarCount: number;
  threeStarCount: number;
  fourStarCount: number;
  fiveStarCount: number;
};

export type ICreateFeedbackBody = {
  title: string;
  rating: number;
  productId: number;
  type: TFeedbackType;
  feedbackImages: string[];
};

export type TCreateFeedbackResponse = {
  id: number;
};

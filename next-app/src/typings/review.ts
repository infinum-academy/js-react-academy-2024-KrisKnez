import { IMeta } from "./pagination";
import { IUser } from "./user";

export interface IReview {
  id: string;
  comment: string;
  rating: number;
  show_id: number;
  user: IUser;
}

export interface IReviewsResponse {
  reviews: IReview[];
  meta: IMeta;
}
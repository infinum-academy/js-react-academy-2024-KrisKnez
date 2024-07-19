import { IMeta } from "./review";

export interface IShow {
  id: string;
  average_rating: number;
  description: string;
  image_url: string;
  no_of_reviews: number;
  title: string;
}

export interface IShowsResponse {
  shows: IShow[];
  meta: IMeta;
}

export interface IShowByIdResponse {
  show: IShow;
}

export interface IShowTopRatedResponse {
  shows: IShow[];
}

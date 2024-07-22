import { IShow } from "@/typings/show";
import { fetcher } from "./fetcher";

interface GetShowsResponse {
  shows: Array<IShow>;
}
export const getShowsKey = () => "shows";
export const getShows = async (): Promise<GetShowsResponse> => {
  return fetcher<GetShowsResponse>("/api/shows");
};

type GetShowByIdResponse = IShow;
export const getShowByIdKey = (id: string) => `show-${id}`;
export const getShowById = async (id: string): Promise<GetShowByIdResponse> => {
  return fetcher<GetShowByIdResponse>(`/api/shows/${id}`);
};

interface GetShowsTopRatedResponse {
  shows: Array<IShow>;
}
export const getShowsTopRatedKey = () => "shows-top-rated";
export const getShowsTopRated = async (): Promise<GetShowsTopRatedResponse> => {
  return fetcher<GetShowsTopRatedResponse>("/api/shows/top-rated");
};

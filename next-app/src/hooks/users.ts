import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IUser } from "@/typings/user";
import useSWR from "swr";

export const useUser = () => useSWR(swrKeys.usersMe, fetcher<{ user: IUser }>);
import { IUser } from "@/typings/user";
import { IAuthData } from "@/utils/authLocalStorage";

export interface ILoginFetcherRequest {
  email: string;
  password: string;
}
export interface ILoginFetcherResponse {
  user: IUser;
  authData: IAuthData;
}

// We need a special fetcher for the login process because we need to access data from the headers.
export const loginFetcher = async (
  url: string,
  { arg }: { arg: ILoginFetcherRequest }
): Promise<ILoginFetcherResponse> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    throw await res.json();
  }

  const responseJson = await res.json();

  return {
    user: responseJson.user,
    authData: {
      accessToken: res.headers.get("Access-Token")!,
      client: res.headers.get("Client")!,
      uid: res.headers.get("Uid")!,
    },
  };
};

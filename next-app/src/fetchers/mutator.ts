import { fetcher } from "./fetcher";

export const mutator = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
) => {
  const headers = {
    "Content-Type": "application/json",
    ...init?.headers,
  };

  return fetcher<JSON>(input, {
    method: "POST",
    ...init,
    headers,
  });
};

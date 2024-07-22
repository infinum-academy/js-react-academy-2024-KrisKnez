import { fetcher } from "./fetcher";

interface MutatorOptions {
  arg?: RequestInit;
}

export const mutator = async <JSON = any>(
  input: RequestInfo,
  { arg: init }: MutatorOptions
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

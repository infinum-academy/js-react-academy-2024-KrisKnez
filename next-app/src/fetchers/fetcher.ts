// https://github.com/vercel/swr/blob/main/examples/basic-typescript/libs/fetch.ts
export const fetcher = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> => {
  const res = await fetch(input, init);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    throw await res.json();
  }

  return res.json();
};

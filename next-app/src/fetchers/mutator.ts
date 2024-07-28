import { fetcher } from "./fetcher";

export const mutator = async <T, U>(url: string, { arg }: { arg: U }) => {
  return fetcher<T>(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
};
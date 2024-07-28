import { fetcher } from "./fetcher";

export const mutator = async <T, U>(url: string, { arg }: { arg: U }) => {
  return fetcher<T>(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  // const res = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(arg),
  // });

  // // If the status code is not in the range 200-299,
  // // we still try to parse and throw it.
  // if (!res.ok) {
  //   const response = await res.json();

  //   // Common Error Response
  //   if (
  //     Array.isArray(response.errors) &&
  //     typeof response.errors[0] === "string"
  //   )
  //     throw new Error(response.errors);
  //   else throw new Error("Unknown error");
  // }

  // return res.json();
};

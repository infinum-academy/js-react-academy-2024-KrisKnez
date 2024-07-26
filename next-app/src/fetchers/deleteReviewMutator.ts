import { fetcher } from "@/fetchers/fetcher";

export const deleteReviewMutator = (url: string) =>
  fetcher<void>(url, {
    method: "DELETE",
  });

import { ICreateReviewRequest, IReview } from "@/typings/review";
import { mutator } from "./mutator";

export const createReviewMutator = (
  url: string,
  { arg }: { arg: ICreateReviewRequest }
) => mutator<IReview, ICreateReviewRequest>(url, { arg });

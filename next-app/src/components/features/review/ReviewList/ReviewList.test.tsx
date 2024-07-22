import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ReviewList from "./ReviewList";
import { IReview } from "@/typings/review";
import { ComponentProps } from "react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

jest.mock("../ReviewItem/ReviewItem", () => ({
  ReviewItem: jest.fn(() => null),
}));

describe("ShowList component", () => {
  const mockReviews: Array<IReview> = [
    {
      id: "1",
      show_id: 1,
      user: {
        id: "1",
        email: "john.doe@gmail.com",
        image_url: "#",
      },
      rating: 4,
      comment: "This is a sample review",
    },
    {
      id: "2",
      show_id: 2,
      user: {
        id: "2",
        email: "john.does2@gmail.com",
        image_url: "#",
      },
      rating: 3,
      comment: "This is another sample review",
    },
  ];

  it("should render ShowCard components for each show", () => {
    render(<ReviewList reviews={mockReviews} />);

    mockReviews.forEach((review) => {
      expect(ReviewItem).toHaveBeenCalledWith(
        expect.objectContaining<ComponentProps<typeof ReviewItem>>({
          review,
        }),
        {}
      );
    });
  });
});

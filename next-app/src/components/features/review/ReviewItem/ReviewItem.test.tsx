import { IReview } from "@/typings/review";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ReviewItem from "./ReviewItem";

describe("ReviewItem component", () => {
  const mockReview: IReview = {
    email: "#",
    avatar: "#",
    rating: 4,
    comment: "This is a sample review",
    showId: "1",
  };

  it("should render comment", () => {
    const { getByText } = render(
      <ReviewItem review={mockReview} onDelete={() => {}} />
    );

    expect(getByText(mockReview.comment)).toBeInTheDocument();
  });

  it("should render delete button", () => {
    const { getByText } = render(
      <ReviewItem review={mockReview} onDelete={() => {}} />
    );

    expect(getByText("Remove")).toBeInTheDocument();
  });

  it("should call onDelete when delete button is clicked", () => {
    const mockOnDelete = jest.fn();
    const { getByText } = render(
      <ReviewItem review={mockReview} onDelete={mockOnDelete} />
    );

    getByText("Remove").click();

    expect(mockOnDelete).toHaveBeenCalled();
  });
});

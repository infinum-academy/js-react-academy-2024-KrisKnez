import React from "react";
import "@testing-library/jest-dom";

import { render, screen, act, waitFor } from "@testing-library/react";
import { ReviewItem } from "./ReviewItem";
import { IReview } from "@/typings/review";
import { mutate } from "swr";
import { deleteReviewMutator } from "@/fetchers/deleteReviewMutator";

jest.mock("@/fetchers/deleteReviewMutator", () => ({
  deleteReviewMutator: jest.fn(),
}));

jest.mock("@/fetchers/fetcher", () => ({
  // Return user
  fetcher: jest.fn(() => ({ user: { id: "1" } })),
}));

jest.mock("swr", () => {
  const originalSWR = jest.requireActual("swr");

  return {
    ...originalSWR,
    __esModule: true,
    // default: jest.fn(() => ({ data: { user: { id: "1" } } })),
    mutate: jest.fn(),
  };
});

describe("ReviewItem component", () => {
  const mockReview: IReview = {
    id: "1",
    show_id: 1,
    user: {
      id: "1",
      email: "john.doe@gmail.com",
      image_url: "#",
    },
    rating: 4,
    comment: "This is a sample review",
  };

  it("should render comment", () => {
    const { getByText } = render(<ReviewItem review={mockReview} />);

    expect(getByText(mockReview.comment)).toBeInTheDocument();
  });

  it("should render delete button", () => {
    const { getByText } = render(<ReviewItem review={mockReview} />);

    expect(getByText("Remove")).toBeInTheDocument();
  });

  it("should call mutator and mutate when delete button is clicked", async () => {
    render(<ReviewItem review={mockReview} />);

    const deleteButton = screen.getByRole("button", { name: "Remove" });
    act(() => {
      deleteButton.click();
    });

    await waitFor(() => {
      expect(deleteReviewMutator).toHaveBeenCalled();
      expect(mutate).toHaveBeenCalled();
    });
  });
});

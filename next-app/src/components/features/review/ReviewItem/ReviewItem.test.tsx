import React from "react";
import "@testing-library/jest-dom";

import { render, screen, act, waitFor } from "@testing-library/react";
import { ReviewItem } from "./ReviewItem";
import { IReview } from "@/typings/review";
import { mutator } from "@/fetchers/mutator";
import { mutate } from "swr";

jest.mock("@/fetchers/mutator", () => ({
  mutator: jest.fn(),
}));

jest.mock("swr", () => {
  return {
    __esModule: true,
    default: jest.fn(() => ({ data: { user: { id: "1" } } })),
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
      expect(mutator).toHaveBeenCalled();
      expect(mutate).toHaveBeenCalled();
    });
  });
});

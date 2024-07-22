import { IReview } from "@/typings/review";
import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";
import { mutate } from "swr";
import { mutator } from "@/fetchers/mutator";
import { ReviewItem } from "./ReviewItem";

// Mocking the swr and fetcher functions
// This is used inside the ReviewItem component to check the currently logged in user and show the delete button
jest.mock("../../../../fetchers/fetcher", () => ({
  fetcher: jest.fn(() => Promise.resolve({ user: { id: "1" } })),
}));

jest.mock("swr", () => ({
  mutate: jest.fn(),
}));

jest.mock("@/fetchers/mutator", () => ({
  mutator: jest.fn(),
}));

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

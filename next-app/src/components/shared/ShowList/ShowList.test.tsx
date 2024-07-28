import { IShow } from "@/typings/show";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ShowList from "./ShowList";
import ShowCard from "../ShowCard/ShowCard";
import { ComponentProps } from "react";

jest.mock("../ShowCard/ShowCard");

describe("ShowList component", () => {
  const mockShows: Array<IShow> = [
    {
      id: "1",
      title: "Sample Show",
      description: "This is a sample show",
      image_url: "https://example.com/sample.jpg",
      average_rating: 4.5,
      no_of_reviews: 10,
    },
    {
      id: "2",
      title: "Another Show",
      description: "This is another sample show",
      image_url: "https://example.com/another.jpg",
      average_rating: 3.5,
      no_of_reviews: 5,
    },
  ];

  it("should render ShowCard components for each show", () => {
    render(<ShowList shows={mockShows} />);

    mockShows.forEach((show) => {
      expect(ShowCard).toHaveBeenCalledWith(
        expect.objectContaining<ComponentProps<typeof ShowCard>>({ show }),
        {}
      );
    });
  });
});

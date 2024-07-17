import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import React from "react";
import ShowCard from "./ShowCard";
import { IShow } from "@/typings/show";

describe("ShowCard component", () => {
  const mockShow: IShow = {
    id: "1",
    title: "Sample Show",
    description: "This is a sample show",
    image_url: "https://example.com/sample.jpg",
    average_rating: 4.5,
    no_of_reviews: 10,
  };

  it("should render image element with provided URL", () => {
    const { getByAltText } = render(<ShowCard show={mockShow} />);

    const imgElement = getByAltText(mockShow.title);

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      // We are using Next.JS's Image component so we do it like this
      expect.stringContaining(encodeURIComponent(mockShow.image_url))
    );
  });

  it("should render title", () => {
    const { getByText } = render(<ShowCard show={mockShow} />);

    expect(getByText(mockShow.title)).toBeInTheDocument();
  });

  it("should contain average rating", () => {
    const { getByText } = render(<ShowCard show={mockShow} />);

    expect(getByText(`${mockShow.average_rating.toString()}/5`)).toBeInTheDocument();
  });
});

"use client";

import ShowList from "@/components/shared/ShowList/ShowList";
import React from "react";

const AllShowsPage = () => {
  return (
    <div>
      <ShowList
        shows={[
          {
            title: "The Simpsons",
            description: "A show about a family",
            averageRating: 4.5,
            imageUrl: "https://picsum.photos/400/600?random=1",
          },
          {
            title: "Breaking Bad",
            description: "A show about a teacher",
            averageRating: 5,
            imageUrl: "https://picsum.photos/400/600?random=2",
          },
          {
            title: "The Office",
            description: "A show about an office",
            averageRating: 4.5,
            imageUrl: "https://picsum.photos/400/600?random=3",
          },
        ]}
      />
    </div>
  );
};

export default AllShowsPage;

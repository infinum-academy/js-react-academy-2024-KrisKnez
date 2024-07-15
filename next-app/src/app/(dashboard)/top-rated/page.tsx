"use client";

import ShowList from "@/components/shared/ShowList/ShowList";
import React from "react";

const TopRatedPage = () => {
  return (
    <ShowList
      shows={[
        {
          title: "Spongebob Squarepants",
          description: "A show about a sponge",
          averageRating: 5,
          imageUrl: "https://picsum.photos/400/600?random=2",
        },
        {
          title: "Avatar: The Last Airbender",
          description: "A show about an avatar",
          averageRating: 4.5,
          imageUrl: "https://picsum.photos/400/600?random=3",
        },
        {
          title: "Friends",
          description: "A show about friends",
          averageRating: 4.5,
          imageUrl: "https://picsum.photos/400/600?random=4",
        },
      ]}
    />
  );
};

export default TopRatedPage;

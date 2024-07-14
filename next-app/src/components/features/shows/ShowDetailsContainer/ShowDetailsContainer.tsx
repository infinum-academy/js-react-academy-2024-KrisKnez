import { IShow } from "@/typings/show";
import React from "react";

import BrooklynNineNineImage from "@/assets/images/brooklyn-nine-nine.webp";
import { ShowDetails } from "../ShowDetails/ShowDetails";

// Brooklyn Nine-Nine
const show: IShow = {
  title: "Brooklyn Nine-Nine",
  description:
    "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
  imageUrl: BrooklynNineNineImage.src,
  averageRating: 4.2,
};

export const ShowDetailsContainer = () => {
  return <ShowDetails show={show} />;
};

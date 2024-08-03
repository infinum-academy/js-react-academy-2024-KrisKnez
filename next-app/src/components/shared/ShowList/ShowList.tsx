import { IShow } from "@/typings/show";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ShowCard from "../ShowCard/ShowCard";
import { Link } from "@chakra-ui/next-js";

interface ShowListProps {
  shows: Array<IShow>;
}

const ShowList = ({ shows }: ShowListProps) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      gap={6}
    >
      {shows.map((show) => (
        <Link key={show.id} href={`/dashboard/all-shows/${show.id}`} minW={0}>
          <GridItem key={show.title} height="400px">
            <ShowCard show={show} h="100%" />
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};

export default ShowList;

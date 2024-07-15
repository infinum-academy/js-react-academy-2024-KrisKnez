import { IShow } from "@/typings/show";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ShowCard from "../ShowCard/ShowCard";

interface ShowListProps {
  shows: Array<IShow>;
}

const ShowList = ({ shows }: ShowListProps) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {shows.map((show) => (
        <GridItem
          key={show.title}
          height="400px"
          display="flex"
        >
          <ShowCard show={show} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ShowList;

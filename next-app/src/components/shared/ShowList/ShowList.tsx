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
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {shows.map((show) => (
        <Link key={show.id} href={`/all-shows/${show.id}`}>
          <GridItem key={show.title} height="400px" display="flex">
            <ShowCard show={show} />
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};

export default ShowList;

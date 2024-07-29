import { Grid, GridItem, GridProps, Heading, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { PlannerContext } from "../ShowPicker";
import ShowCard from "@/components/shared/ShowCard/ShowCard";

interface ShowPickerResultsProps extends GridProps {}

export const ShowPickerResults = (props: ShowPickerResultsProps) => {
  const { selectedShows } = useContext(PlannerContext);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={6}
      {...props}
    >
      {Array.from(selectedShows)
        .splice(0, 4)
        .map((show, index) => (
          <GridItem
            key={`${index}-${show.id}`}
            w="100%"
            h="300"
            minW={0}
            alignItems="stretch"
          >
            <VStack h="100%" alignItems="stretch">
              <ShowCard show={show} height="100%" />
              <Heading size="md" textAlign="center">
                Selection {index + 1}
              </Heading>
            </VStack>
          </GridItem>
        ))}
    </Grid>
  );
};

import React, { useContext } from "react";
import { PlannerContext } from "../ShowPicker";
import { Grid, GridItem, GridProps, VStack } from "@chakra-ui/react";
import ShowCard from "@/components/shared/ShowCard/ShowCard";

interface ShowPickerSelectionStepProps extends GridProps {}

export const ShowPickerSelectionStep = (
  props: ShowPickerSelectionStepProps
) => {
  const {
    shows,
    currentStep,
    setCurrentStep,
    selectedShows,
    setSelectedShows,
  } = useContext(PlannerContext);

  const sliceFrom = 3 * currentStep;
  const sliceTo = 3 * (currentStep + 1);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={6}
      {...props}
    >
      {Array.from(shows?.shows)
        .slice(sliceFrom, sliceTo)
        .map((show) => (
          <GridItem key={show.id} w="100%" h="300" minW={0}>
            <ShowCard
              show={show}
              height="100%"
              onClick={() => {
                const newSelectedShows = [...selectedShows];
                newSelectedShows[currentStep] = show;
                setSelectedShows(newSelectedShows);

                setCurrentStep(currentStep + 1);
              }}
              cursor="pointer"
            />
          </GridItem>
        ))}
    </Grid>
  );
};

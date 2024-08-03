import { Progress, ProgressProps } from "@chakra-ui/react";
import React, { useContext } from "react";
import { PlannerContext } from "../ShowPicker";

interface ShowPickerProgressProps extends ProgressProps {}

export const ShowPickerProgress = (props: ShowPickerProgressProps) => {
  const { currentStep } = useContext(PlannerContext);

  return <Progress bg="white" value={currentStep} max={3} {...props} />;
};

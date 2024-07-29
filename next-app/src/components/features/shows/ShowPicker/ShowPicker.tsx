import ShowCard from "@/components/shared/ShowCard/ShowCard";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IErrorResponse } from "@/typings/errors";
import { IShow, IShowTopRatedResponse } from "@/typings/show";
import {
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { createContext, useEffect, useState } from "react";
import useSWR from "swr";
import { ShowPickerProgress } from "./components/ShowPickerProgress";
import { ShowPickerSelectionStep } from "./components/ShowPickerSelectionStep";
import { ShowPickerResults } from "./components/ShowPickerResults";

export interface IShowPickerContext {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedShows: Array<IShow>;
  setSelectedShows: (shows: Array<IShow>) => void;
  shows: IShowTopRatedResponse;
}

export const PlannerContext = createContext<IShowPickerContext>(
  {} as IShowPickerContext
);

export const ShowPicker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentStep, setCurrentStep] = useState(0);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === 3;

  const [selectedShows, setSelectedShows] = useState<Array<IShow>>([]);

  const { data: shows } = useSWR<IShowTopRatedResponse, IErrorResponse, string>(
    swrKeys.showsTopRated,
    fetcher
  );

  const reset = () => {
    setCurrentStep(0);
    setSelectedShows([]);
  };

  if (!shows) return null;

  return (
    <PlannerContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedShows,
        setSelectedShows,
        shows,
      }}
    >
      <Button variant="dark" onClick={onOpen}>
        Show picker
      </Button>

      <Modal
        onCloseComplete={reset}
        isOpen={isOpen}
        onClose={() => onClose()}
        isCentered
        size={{
          base: "full",
          md: "4xl",
        }}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Show picker</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Stack alignItems="flex-start">
              <Heading size="lg">
                {currentStep === 0
                  ? "Select a movie"
                  : currentStep === 1
                  ? "Select another movie"
                  : currentStep === 2
                  ? "Select one more movie"
                  : "Your selection"}
              </Heading>

              {isLastStep ? (
                <ShowPickerResults
                  width={{
                    base: "100%",
                    sm: "50%",
                    md: "70%",
                  }}
                  alignSelf="center"
                />
              ) : (
                <ShowPickerSelectionStep width="100%" />
              )}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <VStack width="100%" alignItems="stretch" spacing={4}>
              <ShowPickerProgress />
              <HStack alignItems="center" justifyContent="space-between">
                <Button
                  variant="light"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  isDisabled={isFirstStep}
                >
                  Previous
                </Button>
                {isLastStep ? (
                  <Button variant="light" onClick={() => onClose()}>
                    Close
                  </Button>
                ) : (
                  <Button
                    variant="light"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    isDisabled={currentStep >= selectedShows.length}
                  >
                    Next
                  </Button>
                )}
              </HStack>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </PlannerContext.Provider>
  );
};

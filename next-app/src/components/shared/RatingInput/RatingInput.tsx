import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

interface IRatingInput {
  value: number;
  onChange?: (rating: number) => void;
  label?: string;
}

const RatingInput = ({ label, onChange, value }: IRatingInput) => {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  return (
    <Flex gap={5} alignItems="center">
      {label && <label>{label}</label>}
      <Flex
        alignItems="center"
        gap={1}
        onMouseLeave={() => setHoverValue(null)}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const ratingValue = index + 1;

          const isChecked = index < value;
          const isHovered = hoverValue !== null && index < hoverValue;
          const isUnHovered = hoverValue !== null && index >= hoverValue;

          const color = isChecked ? "yellow.400" : "gray.300";
          const colorWithHover = isHovered
            ? "yellow.300"
            : isChecked && !isUnHovered
            ? "yellow.400"
            : "gray.300";

          return (
            <StarIcon
              key={index}
              color={onChange ? colorWithHover : color}
              cursor={onChange ? "pointer" : "default"}
              onClick={() => onChange?.(ratingValue)}
              onMouseOver={() => setHoverValue(ratingValue)}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default RatingInput;

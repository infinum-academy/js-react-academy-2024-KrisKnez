import { Box, Checkbox, Flex } from "@chakra-ui/react";
import React from "react";

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
      <Flex>
        {Array.from({ length: 5 }).map((_, index) => {
          const ratingValue = index + 1;

          const isChecked = index < value;
          const isHovered = hoverValue !== null && index < hoverValue;
          const isUnHovered = hoverValue !== null && index >= hoverValue;
          const color = isHovered
            ? "yellow.300"
            : isChecked && !isUnHovered
            ? "yellow.400"
            : "gray.300";

          const disabledColor = isChecked ? "yellow.400" : "gray.300";

          return (
            <Box
              disabled={!onChange}
              as="input"
              type="checkbox"
              key={index}
              checked={isChecked}
              onChange={() => onChange?.(ratingValue)}
              onMouseOver={() => setHoverValue(ratingValue)}
              onMouseLeave={() => setHoverValue(null)}
              sx={{
                fontSize: "26px",
                visibility: "hidden",
                width: "1em",
                height: "1em",
                _before: {
                  content: '"★"',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "1em",
                  height: "1em",
                  visibility: "visible",
                  color: !onChange ? disabledColor : color,
                  cursor: !onChange ? "cursor" : "pointer",
                  transition: "color 100ms",
                },
              }}
            ></Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default RatingInput;

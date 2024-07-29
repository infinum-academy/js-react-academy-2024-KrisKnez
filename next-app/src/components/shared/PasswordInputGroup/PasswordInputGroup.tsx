import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputLeftElementProps,
  InputProps,
  InputRightElement,
  InputRightElementProps,
} from "@chakra-ui/react";
import React from "react";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

export interface PasswordInputProps extends InputGroupProps {
  inputProps?: InputProps;
  inputLeftElementProps?: InputLeftElementProps;
  inputRightElementProps?: InputRightElementProps;
}

export const PasswordInputGroup = ({
  inputProps,
  inputLeftElementProps,
  inputRightElementProps,
  ...restProps
}: PasswordInputProps) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup variant="dark" {...restProps}>
      <InputLeftElement pointerEvents="none" {...inputLeftElementProps}>
        <Icon as={MdLock} boxSize={6} />
      </InputLeftElement>
      <Input
        type={show ? "text" : "password"}
        placeholder="Password"
        {...inputProps}
      />
      <InputRightElement {...inputRightElementProps}>
        <IconButton
          aria-label={`toggle password visibility`}
          onClick={handleClick}
          variant="light"
          fontSize={20}
        >
          {show ? <MdVisibilityOff /> : <MdVisibility />}
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};

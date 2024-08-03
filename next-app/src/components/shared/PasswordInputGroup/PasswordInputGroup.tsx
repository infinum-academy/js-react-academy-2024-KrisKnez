import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

export interface PasswordInputProps extends InputProps {
  inputProps?: InputProps;
}

export const PasswordInputGroup = forwardRef(
  (props: PasswordInputProps, ref) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup variant="dark">
        <InputLeftElement pointerEvents="none">
          <Icon as={MdLock} boxSize={6} />
        </InputLeftElement>
        <Input
          type={show ? "text" : "password"}
          placeholder="Password"
          {...props}
          ref={ref}
        />
        <InputRightElement>
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
  }
);

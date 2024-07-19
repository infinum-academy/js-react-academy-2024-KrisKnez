import { Stack } from "@chakra-ui/react";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return <Stack height="100%" alignItems="center" justifyContent="center">{children}</Stack>;
};

export default AuthLayout;

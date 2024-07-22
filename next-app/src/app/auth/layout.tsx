import { AuthRedirect } from "@/components/core/AuthRedirect/AuthRedirect";
import { Stack } from "@chakra-ui/react";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthRedirect to="/dashboard" condition="isNotLoggedIn">
      <Stack height="100%" alignItems="center" justifyContent="center">
        {children}
      </Stack>
    </AuthRedirect>
  );
};

export default AuthLayout;

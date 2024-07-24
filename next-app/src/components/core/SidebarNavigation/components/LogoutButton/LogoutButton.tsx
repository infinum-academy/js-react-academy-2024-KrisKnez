import { swrKeys } from "@/fetchers/swrKeys";
import { authLocalStorage } from "@/utils/authLocalStorage";
import { Button } from "@chakra-ui/react";
import React from "react";
import { mutate } from "swr";

export const LogoutButton = () => {
  return (
    <Button
      variant="dark"
      onClick={() => {
        authLocalStorage.setAuthData(null);
        mutate(swrKeys.usersMe, null);
      }}
    >
      Log out
    </Button>
  );
};

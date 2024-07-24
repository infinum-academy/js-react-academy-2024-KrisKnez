import React, { ComponentProps } from "react";

import { Image } from "@chakra-ui/next-js";

import Logo from "@/assets/images/Logo.svg";

interface LogoImageProps
  extends Omit<ComponentProps<typeof Image>, "src" | "alt"> {}

export const LogoImage = (props: LogoImageProps) => {
  return <Image src={Logo} alt="Logo" {...props} />;
};

"use client";

import { Spinner, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/all-shows");
  }, []);

  return (
    <VStack py={16}>
      <Spinner size="xl" />
    </VStack>
  );
};

export default DashboardPage;

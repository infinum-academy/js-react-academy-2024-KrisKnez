"use client";

import { AuthRedirect } from "@/components/core/AuthRedirect/AuthRedirect";

const Home = () => {
  return (
    <>
      <AuthRedirect to="/auth/login" condition="isLoggedIn" />
      <AuthRedirect to="/dashboard/all-shows" condition="isNotLoggedIn" />
    </>
  );
};

export default Home;

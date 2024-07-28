"use client";

import { AuthRedirect } from "@/components/core/AuthRedirect/AuthRedirect";

const Home = () => {
  return (
    <AuthRedirect to="/auth" condition="isLoggedIn">
      <AuthRedirect to="/dashboard" condition="isNotLoggedIn"></AuthRedirect>
    </AuthRedirect>
  );
};

export default Home;

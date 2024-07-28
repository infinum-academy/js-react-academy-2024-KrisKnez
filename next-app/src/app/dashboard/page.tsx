import { redirect } from "next/navigation";

const DashboardPage = () => {
  redirect("/dashboard/all-shows");
};

export default DashboardPage;

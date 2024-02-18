import { Outlet } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import MainNavigation from "../components/Navigation/Code/MainNavigation";
import PageContent from "../UI/PageContent";

function ErrorPage() {
  return (
    <main>
      <MainNavigation />
      <DashBoard />
      <PageContent heading="Error" />
      <Outlet />
    </main>
  );
}

export default ErrorPage;

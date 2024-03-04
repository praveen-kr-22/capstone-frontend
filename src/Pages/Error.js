import { Outlet, useRouteError } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import PageContent from "../UI/PageContent";

function ErrorPage() {
  const error = useRouteError();
  const message = error.message;
  console.log(error);
  return (
    <main>
      <DashBoard />
      <PageContent heading="Error" message={message} />
      <Outlet />
    </main>
  );
}

export default ErrorPage;

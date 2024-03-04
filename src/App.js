import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import RootPage from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ScansPage from "./Pages/Scans";
import FindingsPage from "./Pages/Findings";
import DashBoardPage from "./Pages/DashBoard";
import TicketPage from "./Pages/Ticket";
import HomePage from "./Pages/Home";
import RunbookPage from "./Pages/Runbook";
import LogoutPage from "./Pages/Logout";
import AuthenticationPage from "./Pages/Authentication";
import { loader as findingsLoader } from "./Pages/Findings";
import { loader as dashboardLoader } from "./Pages/DashBoard";
import { loader as ticketLoader } from "./Pages/Ticket";
import { checkAuthLoader, tokenLoader } from "./util/Auth";
import { action as authAction } from "./Pages/Authentication";
import { loader as logoutLoader } from "./Pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: checkAuthLoader,
    // action: authAction,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "scans", element: <ScansPage /> },
      { path: "findings", element: <FindingsPage />, loader: findingsLoader },
      {
        path: "dashboard",
        element: <DashBoardPage />,
        loader: dashboardLoader,
      },
      {
        path: "tickets",
        element: <TicketPage />,
        loader: ticketLoader,
      },
      {
        path: "runbook",
        element: <RunbookPage />,
      },
      {
        path: "logout",
        element: <LogoutPage />,
        loader: logoutLoader,
      },
    ],
  },
  {
    path: "login",
    element: <AuthenticationPage />,
    errorElement: <ErrorPage />,
    // action: authAction,
  },
]);

function App() {
  return (
    <GoogleOAuthProvider clientId="758783642705-l3kc64333crcmni8r09pptr76ijfa64m.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;

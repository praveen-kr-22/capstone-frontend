import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ScansPage from "./Pages/Scans";
import FindingsPage from "./Pages/Findings";
import DashBoardPage from "./Pages/DashBoard";
import { loader as findingsLoader } from "./Pages/Findings";
import { loader as dashboardLoader } from "./Pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { path: "/scans", element: <ScansPage /> },
      { path: "/findings", element: <FindingsPage />, loader: findingsLoader },
      {
        path: "/dashboard",
        element: <DashBoardPage />,
        loader: dashboardLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

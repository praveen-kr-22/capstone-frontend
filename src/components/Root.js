import { Outlet } from "react-router-dom";
import classes from "./css/Root.module.css";

import DashBoard from "./DashBoard";
import MainNavigation from "./Navigation/Code/MainNavigation";

export default function Root() {
  return (
    <main className={classes.main}>
      <MainNavigation />
      <DashBoard />
      <Outlet />
    </main>
  );
}

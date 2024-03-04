import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";

import { checkFeaturePrivilege } from "../../../util/CheckFeaturePrivilege";

import classes from "../css/SideBar.module.css";

import LogoWithName from "../../../UI/LogoWithName";
import DashBoardLogo from "../../../UI/DashBoardLogo";
import ScanLogo from "../../../UI/ScanLogo";
import FindingLogo from "../../../UI/FindingLogo";
import TicketLogo from "../../../UI/TicketLogo";
import RunbookLogo from "../../../UI/RunbookLogo";
import LogoutLogo from "../../../UI/LogoutLogo";

import Links from "./Links";

function SideBar() {
  const userAuthState = useSelector((state) => state.userReducer);
  const { role } = userAuthState;
  // console.log(checkFeaturePrivilege("runbook", "'write'"));
  return (
    <main className={classes.main}>
      <LogoWithName />
      <UserProfile />

      <div className={classes.link}>
        <Links title="Dashboard" to="/dashboard" logo={<DashBoardLogo />} />
        <Links title="Scans" to="/scans" logo={<ScanLogo />} />
        <Links title="Finding" to="/findings" logo={<FindingLogo />} />
        <Links title="Tickets" to="/tickets" logo={<TicketLogo />} />
        {checkFeaturePrivilege("runbook", "write") && (
          <Links title="Runbook" to="/runbook" logo={<RunbookLogo />} />
        )}
        <Links title="Logout" to="logout" logo={<LogoutLogo />} />
      </div>
    </main>
  );
}

export default SideBar;

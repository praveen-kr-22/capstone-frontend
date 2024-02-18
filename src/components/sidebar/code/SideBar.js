import classes from "../css/SideBar.module.css";
import AnalyzeIcon from "../../../UI/AnalyzeIcon";
import ManageIcon from "../../../UI/ManageIcone";

import Links from "./Links";

function SideBar() {
  return (
    <main className={classes.main}>
      <div>
        <section className={classes.box}>
          <AnalyzeIcon />
          &nbsp; &nbsp;Analyze
        </section>
        <Links title="Dashboard" to="/dashboard" />
        <Links title="Scans" to="/scans" />
        <Links title="Finding" to="/findings" />
        <Links title="Tickets" to="" />
      </div>
      <div>
        <section className={classes.box}>
          <ManageIcon />
          &nbsp; &nbsp; Manage
        </section>
        <Links title="Products" to="" />
        <Links title="Subproducts" to="" />
        <Links title="Security Tools" to="" />
        <Links title="Integrations" to="" />
        <Links title="Runbook" to="" />
      </div>
    </main>
  );
}

export default SideBar;

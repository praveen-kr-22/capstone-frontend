import classes from "../css/DashBoard.module.css";
import FindingStatus from "./FindingStatus";
import FindingByApp from "./FindingsByApp";
import FindingsOverTime from "./FindingsOverTime";
import NewFindings from "./NewFindings";

export default function DashBoard({ info }) {
  return (
    <main className={classes.main}>
      <div className={classes.upper}>
        <FindingStatus statusInfo={info.status} />
        <NewFindings age={info.findingsAge} />
        <FindingByApp findingsApp={info.findingsApp} />
      </div>
      <div className={classes.lower}>
        <FindingsOverTime findingsOverTime={info.findingsOverTime} />
      </div>
    </main>
  );
}

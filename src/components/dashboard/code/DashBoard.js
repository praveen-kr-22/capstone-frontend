import classes from "../css/DashBoard.module.css";
import FindingStatus from "./FindingStatus";
import FindingByApp from "./FindingsByApp";
import FindingsOverTime from "./FindingsOverTime";
import NewFindings from "./NewFindings";
import RightSide from "../../RightSide";

export default function DashBoard({ info }) {
  return (
    <RightSide>
      <div className={classes.upper}>
        <FindingStatus statusInfo={info.status} />
        <NewFindings age={info.findingsAge} />
        <FindingByApp findingsApp={info.findingsApp} />
      </div>
      <div className={classes.lower}>
        <FindingsOverTime findingsOverTime={info.findingsOverTime} />
      </div>
    </RightSide>
  );
}

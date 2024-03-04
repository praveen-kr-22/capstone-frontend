import RunbookForm from "./RunbookForm";
import RightSide from "../../RightSide";

import classes from "../css/Runbook.module.css";

export default function Runbook() {
  return (
    <RightSide>
      <div>
        <RunbookForm />
      </div>
    </RightSide>
  );
}

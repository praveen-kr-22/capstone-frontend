import { useState } from "react";
import classes from "../css/FindingCard.module.css";
import Model from "../../../UI/Model";
import DetailModel from "../../../UI/DetailModel";

const symbol = "_";

export default function FindingCard({
  sr,
  id,
  severity,
  status,
  summary,
  cve,
  productName,
  toolName,
  description,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const showMapHandler = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <>
      {showDetails && (
        <DetailModel onHide={showMapHandler} description={description} />
      )}
      <tr className={classes.main}>
        <th>{sr + 1}</th>
        <th>{toolName + symbol + id}</th>
        <th>{severity}</th>
        <th>{status}</th>
        <th>{summary}</th>
        <th>{cve}</th>
        <th>{productName}</th>
        <th>
          <button className={classes.btn} onClick={showMapHandler}>
            ...
          </button>
        </th>
      </tr>
    </>
  );
}

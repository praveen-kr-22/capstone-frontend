import { useState, useEffect } from "react";

import { checkFeaturePrivilege } from "../../../util/CheckFeaturePrivilege";
import classes from "../css/FindingCard.module.css";
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
  page,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [closeFinding, setCloseFinding] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let toolType;

    if (toolName === "dependabot") {
      toolType = "dependabot";
    } else if (toolName === "code scan") {
      toolType = "codescan";
    } else if (toolName === "secret scan") {
      toolType = "secretscan";
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8082/issues/" + toolType + "/closed?id=" + id
        );
        if (!response.ok) {
          setError("Could not change status");
          return;
        }

        setError(null);
        setMessage("Successfully Change Status");
        setCloseFinding(false);
      } catch (error) {
        setError("Could not change status");
      }
    };

    if (closeFinding) {
      fetchData();
    }
  }, [closeFinding, id, toolName]);

  const closeFindingHandler = () => {
    setCloseFinding(true);
  };

  const showDetailHandler = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <tbody>
      {showDetails && (
        <DetailModel onHide={showDetailHandler} description={description} />
      )}
      <tr className={classes.main}>
        <td>{sr + 1}</td>
        <td>{toolName + symbol + id}</td>
        <td>{severity}</td>
        <td>{status}</td>
        <td>{summary}</td>
        <td>{cve}</td>
        <td>{productName}</td>
        <td>
          <button className={classes.btn} onClick={showDetailHandler}></button>
        </td>
        {checkFeaturePrivilege("finding", "close") && (
          <td>
            {status === "Open" ? (
              <button
                className={classes.btnClose}
                onClick={closeFindingHandler}
              ></button>
            ) : (
              <button className={classes.btn}></button>
            )}
          </td>
        )}
      </tr>
    </tbody>
  );
}

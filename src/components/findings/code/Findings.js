import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { getAuthToken } from "../../../util/Auth";
import { checkFeaturePrivilege } from "../../../util/CheckFeaturePrivilege";
import classes from "../css/Findings.module.css";
import FindingCard from "./FindingCard";
import Pagination from "../../../UI/Pagination";
import RightSide from "../../RightSide";

export default function Findings({ findings, page }) {
  const userAuthState = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(findings);
  const [totalPage, setTotalPage] = useState(page);

  const handleDataLoaded = (data) => {
    setTotalPage(data.totalPage);
    setFetchedData(data.content);
  };
  const { role } = userAuthState;

  useEffect(() => {
    const saveData = async () => {
      const token = getAuthToken();

      if (!token) {
        return redirect("http://127.0.0.1:3001/auth");
      }
      if (!loading) return;
      setLoading(true);
      setMessage("Please Wait");
      setError(null);
      try {
        const response = await fetch("http://127.0.0.1:8082/findings/save", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        setMessage(
          "Scan successful. Please refresh the page for new findings."
        );
      }
    };

    saveData();
  }, [loading]);

  let isShowScanButton = false;
  let isNotShowCloseFinding = false;

  if (role === "User") {
    isNotShowCloseFinding = true;
  }

  if (role === "Admin") {
    isShowScanButton = true;
  }
  return (
    <RightSide>
      <div className={classes.container}>
        <section className={classes.section}>
          <h1 className={classes.heading}>All Findings</h1>
          {loading && <h1>Please Wait...</h1>}
          {!loading && !error && <h1>{message}</h1>}
          {error && <p>{error}</p>}
          {checkFeaturePrivilege("finding", "scan") && (
            <Button onClick={() => setLoading(true)} disabled={loading}>
              New Findings
            </Button>
          )}
        </section>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Finding ID</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Summary</th>
              <th>CVE</th>
              <th>Product</th>
              <th>Detail</th>
              {checkFeaturePrivilege("finding", "close") && <th>Close</th>}
            </tr>
          </thead>
          {fetchedData.map((find, index) => (
            <FindingCard
              key={index}
              sr={index}
              severity={find.securityLevel}
              id={find.id}
              status={find.status}
              summary={find.summary}
              cve={find.cveScore}
              productName={find.productName}
              toolName={find.toolName}
              description={find.description}
            />
          ))}
        </table>
        <Pagination
          page={totalPage}
          onDataLoaded={handleDataLoaded}
          url="http://127.0.0.1:8082/findings?pageNumber="
        />
      </div>
    </RightSide>
  );
}

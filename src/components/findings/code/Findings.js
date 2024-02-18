import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import classes from "../css/Findings.module.css";
import FindingCard from "./FindingCard";
import Pagination from "../../../UI/Pagination";

export default function Findings({ findings, page }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  const handleDataLoaded = (data) => {
    setFetchedData(data.content);
  };

  useEffect(() => {
    const saveData = async () => {
      if (!loading) return;
      setLoading(true);
      setMessage("Please Wait");
      setError(null);
      try {
        const response = await fetch("http://localhost:8080/findings/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        setMessage("Scan successful. Please refresh the page for new findings.");
      }
    };

    saveData();
  }, [loading]);

  if (fetchedData !== null) {
    findings = fetchedData;
  }

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <section className={classes.section}>
          <h1 className={classes.heading}>All Findings</h1>
          {loading && <h1>Please Wait...</h1>}
          {!loading && !error && <h1>{message}</h1>}
          {error && <p>{error}</p>}
          <Button onClick={() => setLoading(true)} disabled={loading}>
            New Findings
          </Button>
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
            </tr>
          </thead>
          {findings.map((find, index) => (
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
      </main>
      <Pagination page={page} onDataLoaded={handleDataLoaded} />
    </div>
  );
}

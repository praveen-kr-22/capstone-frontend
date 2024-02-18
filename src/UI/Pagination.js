import { useState, useEffect } from "react";
import classes from "./Pagination.module.css";
import NextPageLogo from "./NextPageLogo";
import PreviousPageLogo from "./PreviousPageLogo";

export default function Pagination({ page, onDataLoaded }) {
  const [currPage, setCurrPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!loading) return; // Avoid fetching if loading is false
      setLoading(true);
      setMessage("Please Wait");
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:8080/findings?page=${currPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // Process the response data if needed
        const data = await response.json();
        onDataLoaded(data); //
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        setMessage("Scan successful. Please refresh page for new finding");
      }
    };

    fetchData();
  }, [loading, currPage, onDataLoaded]); // Depend on loading and currPage

  const previousPageHandler = () => {
    if (currPage > 0) {
      setCurrPage(currPage - 1);
      setLoading(true); // Start loading when page changes
    }
  };

  const nextPageHandler = () => {
    if (currPage < page - 1) {
      setCurrPage(currPage + 1);
      setLoading(true);
    }
  };

  return (
    <main className={classes.main}>
      <button className={classes.btn} onClick={previousPageHandler}>
        <PreviousPageLogo />
      </button>
      <section>{currPage}</section>
      <button className={classes.btn} onClick={nextPageHandler}>
        <NextPageLogo />
      </button>
    </main>
  );
}

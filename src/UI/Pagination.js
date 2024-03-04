import { useState, useEffect } from "react";
import { redirect, json } from "react-router-dom";
import { getAuthToken } from "../util/Auth";
import classes from "./Pagination.module.css";
import NextPageLogo from "./NextPageLogo";
import PreviousPageLogo from "./PreviousPageLogo";

export default function Pagination({ page, onDataLoaded, url }) {
  const [currPage, setCurrPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const URL = url + currPage;

  useEffect(() => {
    const token = getAuthToken();

    if (!token) {
      return redirect("/auth");
    }
    const fetchData = async () => {
      if (!loading) return;
      setLoading(true);
      setMessage("Please Wait");
      setError(null);
      try {
        const response = await fetch(URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw json({ message: "Not get user info" }, { status: 500 });
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
  }, [loading, currPage, onDataLoaded, URL]); // Depend on loading and currPage

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

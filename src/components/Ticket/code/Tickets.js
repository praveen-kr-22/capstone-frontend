import { useState } from "react";

import classes from "../css/Tickets.module.css";
import Pagination from "../../../UI/Pagination";
import TicketCard from "./TicketsCard";
import RightSide from "../../RightSide";

export default function Ticket({ page, tickets }) {
  const [fetchedData, setFetchedData] = useState(tickets);
  const [totalPage, setTotalPage] = useState(page);
  const handleDataLoaded = (data) => {
    setTotalPage(data.TotalPage);
    setFetchedData(data.Tickets);
  };

  return (
    <RightSide>
      <div className={classes.container}>
        <section className={classes.section}>
          <h1 className={classes.heading}>All Tickets</h1>
        </section>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Ticket ID</th>
              <th>Ticket System</th>
              <th>Ticket Type</th>
              <th>Issue Type</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Ticket Status</th>
            </tr>
          </thead>
          {fetchedData.map((ticket, index) => (
            <TicketCard
              key={index}
              sr={index}
              ticketKey={ticket.key}
              ticketSystem={ticket.ticketSystemName}
              ticketType={ticket.ticketType}
              issueType={ticket.issueType}
              title={ticket.title}
              priority={ticket.priority}
              ticketStatus={ticket.ticketStatus}
            />
          ))}
        </table>
        <Pagination
          page={totalPage}
          onDataLoaded={handleDataLoaded}
          url="http://127.0.0.1:8082/ticket/all?pageNumber="
        />
      </div>
    </RightSide>
  );
}

import { useEffect } from "react";

export default function TicketCard({
  sr,
  ticketKey,
  ticketSystem,
  ticketType,
  issueType,
  title,
  priority,
  ticketStatus,
}) {

  useEffect(() => {

    const closedTicket = () => {
      
    }
    
  },[])


  return (
    <tbody>
      <tr>
        <td>{sr + 1}</td>
        <td>{ticketKey}</td>
        <td>{ticketSystem}</td>
        <td>{ticketType}</td>
        <td>{issueType}</td>
        <td>{title}</td>
        <td>{priority}</td>
        <td>{ticketStatus}</td>
      </tr>
    </tbody>
  );
}

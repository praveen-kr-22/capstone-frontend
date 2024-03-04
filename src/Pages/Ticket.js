import { json, useLoaderData, useNavigation, redirect } from "react-router-dom";
import { getAuthToken } from "../util/Auth";

import Ticket from "../components/Ticket/code/Tickets";
import PageContent from "../UI/PageContent";

export default function TicketPage() {
  const navigation = useNavigation();
  const resData = useLoaderData();
  const isLoading = navigation.state === "loading";
  return (
    <>
      {isLoading && <PageContent />}
      {!isLoading && (
        <Ticket page={resData.TotalPage} tickets={resData.Tickets} />
      )}
    </>
  );
}

export const loader = async () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("http://localhost:3001/auth");
  }
  const response = await fetch("http://localhost:8082/ticket/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw json({ message: "Could not fetch Tickets" }, { status: 500 });
  }

  return response;
};

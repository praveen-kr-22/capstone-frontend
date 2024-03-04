import { json, useLoaderData, useNavigation, redirect } from "react-router-dom";

import { getAuthToken } from "../util/Auth";
import DashBoard from "../components/dashboard/code/DashBoard";
import PageContent from "../UI/PageContent";

export default function DashBoardPage() {
  const resData = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <PageContent />}
      {!isLoading && <DashBoard info={resData} />}
    </>
  );
}

export const loader = async () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("http://localhost:3001/auth");
  }
  const response = await fetch("http://127.0.0.1:8082/dashboard/allinfo", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401 || response.status === 404) {
    throw json(
      {
        message:
          "Access Denied - You do not have permission to access this resource.",
      },
      { status: response.status }
    );
  }

  if (!response.ok) {
    throw json({ message: "Could not fetch Info" }, { status: 500 });
  }

  return response;
};

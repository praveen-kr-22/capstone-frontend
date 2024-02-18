import { json, useLoaderData, useNavigation } from "react-router-dom";

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
  const response = await fetch("http://localhost:8080/dashboard/allinfo");

  if (!response.ok) {
    throw json({ message: "Could not fetch Tours" }, { status: 500 });
  }

  return response;
};

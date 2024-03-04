import { json, useLoaderData, useNavigation, redirect } from "react-router-dom";
import { getAuthToken } from "../util/Auth";
import Findings from "../components/findings/code/Findings";
import PageContent from "../UI/PageContent";

export default function FindingsPage() {
  const navigation = useNavigation();
  const resData = useLoaderData();
  const findings = resData.content;
  const totalPage = resData.totalPage;
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <PageContent />}
      {!isLoading && <Findings findings={findings} page={totalPage} />}
    </>
  );
}

export const loader = async () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("http://localhost:3001/auth");
  }
  const response = await fetch("http://127.0.0.1:8082/findings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not fetch Findings" }, { status: 500 });
  }

  return response;
};

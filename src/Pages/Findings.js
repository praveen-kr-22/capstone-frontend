import Findings from "../components/findings/code/Findings";
import PageContent from "../UI/PageContent";
import { json, useLoaderData, useNavigation } from "react-router-dom";

export default function FindingsPage() {
  const navigation = useNavigation();
  const resData = useLoaderData();
  const findings = resData.content;
  const totalPage = resData.totalPages;
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <PageContent />}
      {!isLoading && <Findings findings={findings} page={ totalPage} />}
    </>
  );
}

export const loader = async () => {
  const response = await fetch("http://localhost:8080/findings");

  if (!response.ok) {
    throw json({ message: "Could not fetch Tours" }, { status: 500 });
  }

  return response;
};

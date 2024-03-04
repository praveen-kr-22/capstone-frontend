import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

function LogoutPage() {
  return <h1>logout</h1>;
}

export default LogoutPage;

export const loader = async () => {
  Cookies.remove("token");
  return redirect("/login");
};

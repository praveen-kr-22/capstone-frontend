import { json, redirect } from "react-router-dom";
import Cookies from "js-cookie";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = Cookies.get("token");

  if (!token) {
    return null;
  }
  // const tokenDuration = getTokenDuration();

  // if (tokenDuration < 0) {
  //   return "EXPIRED";
  // }

  return token;
}

export async function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("login");
  }

  const response = await fetch("http://127.0.0.1:8082/api/v1/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw json({ message: "Not get user info" }, { status: 500 });
  }

  return response;
}

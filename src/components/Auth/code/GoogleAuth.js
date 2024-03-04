import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import classes from "../css/GoogleAUth.module.css";

export default function GoogleAuth() {
  const navigate = useNavigate();
  const onSuccessHandler = (response) => {
    Cookies.set("token", response.credential, { expires: 1 });
    navigate("/");
  };

  return (
    <div className={classes.loginButton}>
      <GoogleLogin
        onSuccess={onSuccessHandler}
        onError={(error) => {
          console.log(error);
        }}
      />
    </div>
  );
}

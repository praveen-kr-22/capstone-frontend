import { Link } from "react-router-dom";
import classes from "../css/LoginButton.module.css";

function LoginButton() {
  return (
    <Link to="/auth?mode=login" className={classes.btn}>
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/material-sharp/96/000000/gender-neutral-user.png"
        alt="gender-neutral-user"
      />
      <h4>Login</h4>
    </Link>
  );
}

export default LoginButton;

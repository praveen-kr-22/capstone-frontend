import { useEffect } from "react";
import { NavLink, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../../store/userAuth-slice";
import DashBoardLogo from "../../../UI/DashBoardLogo";
import classes from "../css/Links.module.css";

function Links({ title, to, logo }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  useEffect(() => {
    const message = "Please wait data is loading...";
    if (isLoading) {
      dispatch(authAction.setMessage(message));
    } else {
      dispatch(authAction.setMessage(""));
    }
  }, [isLoading]);

  return (
    <div className={classes.main}>
      {/* <DashBoardLogo /> */}
      {logo}
      <NavLink to={to}>{title}</NavLink>
    </div>
  );
}

export default Links;

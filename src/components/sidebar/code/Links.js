import { useEffect } from "react";
import { NavLink, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { authAction } from "../../Store/adminAuth-slice";
import classes from "../css/Links.module.css";
function Links({ title, to }) {
  // const dispatch = useDispatch();
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";
  // useEffect(() => {
  //   const message = "Please wait data is loading...";
  //   if (isLoading) {
  //     dispatch(authAction.setMessage(message));
  //   } else {
  //     dispatch(authAction.setMessage(""));
  //   }
  // }, [isLoading]);

  return (
    <div className={classes.main}>
      <NavLink to={to}>{title}</NavLink>
    </div>
  );
}

export default Links;

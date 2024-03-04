// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
import classes from "../css/UserProfile.module.css";

export default function UserProfile() {
  const userAuthState = useSelector((state) => state.userReducer);
  const { firstName, lastName, email, orgName, photo } = userAuthState;
  // console.log(photo);
  return (
    <main className={classes.main}>
      <div className={classes.userProfile}>
        <img src={photo} alt="user"></img>
        <h3>{firstName + " " + lastName}</h3>
        <h4>{orgName}</h4>
        <h5>{email}</h5>
      </div>
    </main>
  );
}

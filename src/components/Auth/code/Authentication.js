import AuthForm from "./AuthForm";
import classes from "../css/Authentication.module.css";
import banner from "../../../assets/ArmorCode_platform-banner.png";

export default function Authentication({ loginHandler }) {
  return (
    <main className={classes.main}>
      <div>
        <AuthForm className={classes.authForm} />
      </div>
      <div className={classes.bannerContainer}>
        <img
          src={banner}
          alt="ArmorCode_platform-banner"
          className={classes.bannerImage}
        />
      </div>
    </main>
  );
}

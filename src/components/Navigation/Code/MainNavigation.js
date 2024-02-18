import NavLinks from "./NavLinks";
import Title from "./Title";
import classes from "../css/MainNavigation.module.css";
import LoginButton from "./LoginButton";
import UserMenu from "./UserMenu";
function MainNavigation({ showLoginButton, userData }) {
  return (
    <header className={classes.header}>
      <Title />
      {/* <NavLinks /> */}
      {showLoginButton && <LoginButton />}
      {!showLoginButton && <UserMenu userData={userData} />}
    </header>
  );
}

export default MainNavigation;

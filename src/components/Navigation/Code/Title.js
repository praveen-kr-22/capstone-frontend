import { Link } from "react-router-dom";
import classes from "../css/Title.module.css";
// import ArmorCodeLogoWithName from "../../../assets/logo.png";
import LogoWithName from "../../../UI/LogoWithName";
function Title() {
  return (
    <>
      <LogoWithName />
      <Link to="/" className={classes.button}>
        <LogoWithName />
      </Link>
    </>
  );
}
export default Title;

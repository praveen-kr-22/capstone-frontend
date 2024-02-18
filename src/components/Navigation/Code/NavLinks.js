import { NavLink } from "react-router-dom";
import classes from "../css/NavLinks.module.css";
function NavLinks() {
  return (
    <nav>
      <ul className={classes.list}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/tours"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Tour
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavLinks;

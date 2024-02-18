import { Link, Navigate, redirect } from "react-router-dom";
import classes from "../css/DropDownMenu.module.css.css";
function DropDownMenu() {
  const logoutHandler = () => {
    const confirm = window.confirm("are you sure");
    if (confirm) {
      localStorage.removeItem("token");
      window.location.reload(false);
    }
  };
  return (
    <div>
      <div>
        <Link to="/user-profile">Profile</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
      {/* <div>
        <Link>Logout</Link>
      </div> */}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default DropDownMenu;

import { useState } from "react";
import Model from "../../../UI/Model";
import classes from "../css/UserMenu.module.css";
import DropDownMenu from "./DropDownMenu";
function UserMenu({ userData }) {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const clickHandler = () => {
    setShowDropDownMenu((prev) => !prev);
  };
  return (
    <>
      {showDropDownMenu && (
        <Model onHide={clickHandler}>
          <DropDownMenu />
        </Model>
      )}
      <section className={classes.main}>
        <span className={classes.name}>
          <h1>{userData ? userData.name.split(" ")[0] : ""}</h1>
        </span>
        <button className={classes.btn} onClick={clickHandler}>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 20.00 20.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#c00707"
            stroke="#c00707"
            transform="rotate(0)"
            strokeWidth="0.0002"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              linecap="round"
              linejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.08"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#c00707"
                d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z"
              ></path>
            </g>
          </svg>
        </button>
      </section>
    </>
  );
}

export default UserMenu;

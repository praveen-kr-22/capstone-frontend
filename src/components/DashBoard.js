import classes from "./css/DashBoard.module.css" 

import SideBar from "../components/sidebar/code/SideBar";

function DashBoard() {
  return (
    <main className={classes.main}>
      <SideBar />
    </main>
  );
}

export default DashBoard;

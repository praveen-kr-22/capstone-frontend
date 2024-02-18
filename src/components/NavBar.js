import classes from "./css/NavBar.module.css";

import ArmorCodeLogoWithName from "./assets/logo.webp";

function NavBar() {
  return (
    <main className={classes.main}>
      <section>
        <img src={ArmorCodeLogoWithName} />
      </section>
    </main>
  );
}

export default NavBar;

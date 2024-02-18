import { useSelector } from "react-redux";
import classes from "./PageContent.module.css";
function PageContent(props) {


  return (
    <main className={classes.main}>
      <section className={classes.heading}>
        <h1>{props.heading}</h1>
      </section>
      <div className={classes.message}>
        <h1>{props.message}</h1>
      </div>
    </main>
  );
}

export default PageContent;

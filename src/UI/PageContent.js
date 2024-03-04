import RightSide from "../components/RightSide";
import classes from "./PageContent.module.css";
function PageContent(props) {
  return (
    <RightSide>
      <section className={classes.heading}>
        <h1>{props.heading}</h1>
      </section>
      <div className={classes.message}>
        <h3>{props.message}</h3>
      </div>
    </RightSide>
  );
}

export default PageContent;

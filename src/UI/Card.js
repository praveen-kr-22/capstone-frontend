import classes from "./Card.module.css";
function Card(props) {
  return (
    <div
      style={{ height: props.height, width: props.width }}
      className={classes.card}
    >
      {props.children}
    </div>
  );
}
export default Card;

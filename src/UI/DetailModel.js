import { createPortal } from "react-dom";
import classes from "./DetailModel.module.css";
import { BackDrop } from "./Model";

const DetailModelOverLay = (props) => {
  return (
    <diV className={classes.detail}>
      <h3 className={classes.text}>{props.description}</h3>
    </diV>
  );
};
function DetailModel(props) {
  return (
    <>
      {createPortal(
        <BackDrop onHide={props.onHide} />,
        document.getElementById("detail")
      )}
      {createPortal(
        <DetailModelOverLay description={props.description}>
          {props.children}
        </DetailModelOverLay>,
        document.getElementById("detail")
      )}
    </>
  );
}

export default DetailModel;

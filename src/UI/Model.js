import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export const BackDrop = (props) => {
  return (
    <div className={classes.mainBackDrop}>
      <div className={classes.backdrop} onClick={props.onHide}></div>
    </div>
  );
};

const ModelOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Model(props) {
  return (
    <>
      {createPortal(<BackDrop onHide={props.onHide} />, portalElement)}
      {createPortal(
        <ModelOverLay>{props.children}</ModelOverLay>,
        portalElement
      )}
    </>
  );
}

export default Model;

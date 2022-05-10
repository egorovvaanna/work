import ReactDOM from "react-dom";
import style from "./Modal.module.css";

export const Modal = ({ children, visible, setVisible }) => {
  const classes = [style.modal_container];
  if (visible) {
    classes.push(style.active);
  }
  return ReactDOM.createPortal(
    <div className={classes.join(" ")} onClick={() => setVisible(false)}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("root")
  );
};

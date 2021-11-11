import React from "react";
import classes from './Popup.module.css'
const Popup = props => {
  return (
    <div className={classes.PopUpBox}>
      <div className={classes.Box}>
        <span className={classes.CloseIcon} onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;
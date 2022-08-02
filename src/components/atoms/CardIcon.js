import React from "react";
import classes from "./CardIcon.module.css";

const CardIcon = (props) => {
  const { iconClasses } = props;

  return (
    <div className={classes["icon-container"]}>
      <i className={`${iconClasses} ${classes["card__icon"]}`}></i>
    </div>
  );
};

export default CardIcon;

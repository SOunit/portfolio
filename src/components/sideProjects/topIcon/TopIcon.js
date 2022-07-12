import React from "react";
import classes from "./TopIcon.module.css";

const TopIcon = (props) => {
  const { iconClasses } = props;

  return (
    <div className={classes["icon-container"]}>
      <i className={`${iconClasses} ${classes["card__icon"]}`}></i>
    </div>
  );
};

export default TopIcon;

import React from "react";
import classes from "./Icon.module.css";

const Icon = (props) => {
  const { title, classes: style } = props;
  return <div className={`${classes["icon"]} ${style}`}>{title}</div>;
};

export default Icon;

import React from "react";
import classes from "./LinkIcon.module.css";

const LinkIcon = (props) => {
  const { linkUrl, iconStyle } = props;

  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <i className={`${iconStyle} ${classes["icon"]}`}></i>
    </a>
  );
};

export default LinkIcon;

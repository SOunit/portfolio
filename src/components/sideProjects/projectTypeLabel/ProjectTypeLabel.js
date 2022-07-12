import React from "react";
import classes from "./ProjectTypeLabel.module.css";

const ProjectTypeLabel = (props) => {
  const { isPersonal } = props;

  return (
    <p className={classes["project-type"]}>
      {isPersonal ? "Personal" : "Group"}
    </p>
  );
};

export default ProjectTypeLabel;

import React from "react";
import { PROJECTS } from "../../data/side-projects";
import SideProjectCard from "./SideProjectCard";
import classes from "./SideProjectCardList.module.css";

const SideProjectCardList = () => {
  const sideProjectCardList = PROJECTS.map((project) => (
    <SideProjectCard key={project.id} data={project} />
  ));

  return <div className={classes["cards"]}>{sideProjectCardList}</div>;
};

export default SideProjectCardList;

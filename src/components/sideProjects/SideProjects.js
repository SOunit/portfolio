import SectionTitle from "../sectionTitle/SectionTitle";
import SideProjectCard from "./sideProjectCard/SideProjectCard";
import classes from "./SideProjects.module.css";

import { PROJECTS } from "../../data/side-projects";

const SideProjects = () => {
  const sideProjectCardList = PROJECTS.map((project) => (
    <SideProjectCard key={project.id} data={project} />
  ));

  return (
    <section id="side-projects" className={classes["side-projects"]}>
      <SectionTitle title="Side Projects" />
      <div className={classes["cards"]}>{sideProjectCardList}</div>
    </section>
  );
};

export default SideProjects;

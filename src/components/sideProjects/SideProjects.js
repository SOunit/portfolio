import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "./card/Card";
import classes from "./SideProjects.module.css";

import { PROJECTS } from "../../data/side-projects";

const SideProject = () => {
  const cards = PROJECTS.map((project) => (
    <Card key={project.id} data={project} />
  ));
  return (
    <section id="side-projects" className={classes["side-projects"]}>
      <SectionTitle title="Side Projects" />
      <div className={classes["cards"]}>{cards}</div>
    </section>
  );
};

export default SideProject;

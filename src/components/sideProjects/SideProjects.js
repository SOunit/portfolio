import SectionTitle from "../common/sectionTitle/SectionTitle";
import SideProjectCardList from "./sideProjectCardList/SideProjectCardList";
import classes from "./SideProjects.module.css";

const SideProjects = () => {
  return (
    <section id="side-projects" className={classes["side-projects"]}>
      <SectionTitle title="Side Projects" />
      <SideProjectCardList />
    </section>
  );
};

export default SideProjects;

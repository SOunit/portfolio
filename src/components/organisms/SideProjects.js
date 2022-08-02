import SectionTitle from "./SectionTitle";
import SideProjectCardList from "./SideProjectCardList";
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

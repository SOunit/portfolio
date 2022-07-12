import classes from "./SideProjectCard.module.css";
import LinkIcons from "../linkIcons/LinkIcons";
import TopIcon from "../topIcon/TopIcon";

const SideProjectCard = (props) => {
  const { data } = props;
  const { skills, id, iconClasses, personal, title, text, githubUrl, demoUrl } =
    data;

  const skillCardList = skills.map((skill) => (
    <div key={`${id}${skill}`} className={classes["card__skill"]}>
      {skill}
    </div>
  ));

  return (
    <div className={classes["card"]}>
      <TopIcon iconClasses={iconClasses} />
      <p className={classes["card__type"]}>{personal ? "Personal" : "Group"}</p>
      <div className={classes["card__info"]}>
        <h2 className={classes["card__title"]}>{title}</h2>
        <p className={classes["card__text"]}>{text}</p>
        <div className={classes["card__skills"]}>{skillCardList}</div>
      </div>

      {(githubUrl || demoUrl) && (
        <LinkIcons githubUrl={githubUrl} demoUrl={demoUrl} />
      )}
    </div>
  );
};

export default SideProjectCard;

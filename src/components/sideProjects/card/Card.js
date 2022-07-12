import classes from "./Card.module.css";
import LinkIcons from "./linkIcons/LinkIcons";

const Card = (props) => {
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
      <div className={classes["icon-container"]}>
        <i className={`${iconClasses} ${classes["card__icon"]}`}></i>
      </div>
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

export default Card;

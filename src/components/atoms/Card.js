import classes from "./Card.module.css";

const Card = (props) => {
  const skills = props.data.skills.map((skill) => (
    <div
      key={`${props.data.id}_${skill}`}
      className={`${classes["card__skill"]} ${
        props.data.isFront ? classes["card__skill--front"] : ""
      }`}
    >
      {skill}
    </div>
  ));

  return (
    <div
      className={`${classes["card"]} ${
        props.data.isFront ? classes["card--front"] : ""
      }`}
    >
      <div
        className={`${classes["card__detail"]} ${
          props.data.isFront ? classes["card__detail--front"] : ""
        }`}
      >
        <h3 className={classes["card__title"]}>{props.data.jobTitle}</h3>

        <div>{props.data.companyName}</div>
        <h4 className={classes["card__subtitle"]}>
          {props.data.companyBusiness}
        </h4>

        <div>{props.data.term}</div>
        <div>{props.data.place}</div>
      </div>
      <div>Skills</div>
      <div className={classes["card__skills"]}>{skills}</div>
    </div>
  );
};
export default Card;

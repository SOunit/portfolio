import classes from './Card.module.css';

const Card = (props) => {
  const tasks = props.data.tasks.map((task) => (
    <div
      key={`${props.data.id}_${task}`}
      className={`${classes['card__skill']} ${
        props.data.isFront ? classes['card__skill--front'] : ''
      }`}
    >
      {task}
    </div>
  ));

  const usings = props.data.usings.map((using) => (
    <div
      key={`${props.data.id}_${using}`}
      className={`${classes['card__skill']} ${
        props.data.isFront ? classes['card__skill--front'] : ''
      }`}
    >
      {using}
    </div>
  ));

  return (
    <div
      className={`${classes['card']} ${
        props.data.isFront ? classes['card--front'] : ''
      }`}
    >
      <div
        className={`${classes['card__detail']} ${
          props.data.isFront ? classes['card__detail--front'] : ''
        }`}
      >
        <h3 className={classes['card__title']}>{props.data.companyName}</h3>
        <h4 className={classes['card__subtitle']}>
          {props.data.companyBusiness}
        </h4>
        <div>{props.data.jobTitle}</div>
        <div>{props.data.term}</div>
        <div>{props.data.place}</div>
      </div>
      <div>Tasks</div>
      <div className={classes['card__skills']}>{tasks}</div>
      <div>Using</div>
      <div className={classes['card__skills']}>{usings}</div>
    </div>
  );
};
export default Card;

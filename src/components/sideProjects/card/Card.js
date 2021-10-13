import classes from './Card.module.css';

const Card = (props) => {
  const skills = props.data.skills.map((skill) => (
    <div key={`${props.data.id}${skill}`} className={classes['card__skill']}>
      {skill}
    </div>
  ));

  return (
    <div className={classes['card']}>
      <div className={classes['icon-container']}>
        <i className={`${props.data.iconClasses} ${classes['card__icon']}`}></i>
      </div>
      <div className={classes['card__info']}>
        <h2 className={classes['card__title']}>{props.data.title}</h2>
        <p className={classes['card__text']}>{props.data.text}</p>
        <div className={classes['card__skills']}>{skills}</div>
      </div>
      <div className={classes['card__links']}>
        <a
          href={props.data.githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={classes['card__link']}
        >
          <i className={`fab fa-github ${classes['github-icon']}`}></i>
        </a>
        <a
          href={props.data.demoUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={classes['card__link']}
        >
          <i className={`fas fa-search ${classes['github-icon']}`}></i>
        </a>
      </div>
    </div>
  );
};

export default Card;

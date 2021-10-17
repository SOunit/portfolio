import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={classes['welcome']}>
      <h2 className={classes['welcome__title']}>Thank you</h2>
      <p className={classes['welcome__caption']}>
        for visiting my portfolio page!
      </p>
      <p className={classes['welcome__text']}>
        I have 4.5 years experience in Web Development mainly as a Java
        Engineer!
      </p>
    </div>
  );
};

export default Welcome;

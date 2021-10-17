import SectionTitle from '../sectionTitle/SectionTitle';
import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={classes['welcome']}>
      <SectionTitle title='Thank you for visiting my portfolio page!' />
      <p className={classes['welcome__text']}>
        I have 4.5 years experience in Web Development mainly as a Java
        Engineer!
      </p>
    </div>
  );
};

export default Welcome;

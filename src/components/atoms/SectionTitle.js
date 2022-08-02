import classes from './SectionTitle.module.css';

const SectionTitle = (props) => {
  return <h2 className={classes['section-title']}>{props.title}</h2>;
};

export default SectionTitle;

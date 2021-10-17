import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes['backdrop']} onClick={props.onSideMenuClose}></div>
  );
};

export default Backdrop;

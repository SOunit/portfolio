import classes from './MenuButton.module.css';

const MenuButton = () => {
  return (
    <div className={classes['menu-btn']}>
      <div className={classes['menu-btn__bar']}></div>
      <div className={classes['menu-btn__bar']}></div>
      <div className={classes['menu-btn__bar']}></div>
    </div>
  );
};

export default MenuButton;

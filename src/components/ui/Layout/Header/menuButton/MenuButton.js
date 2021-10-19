import classes from './MenuButton.module.css';

const MenuButton = (props) => {
  return (
    <div className={classes['menu-btn']} onClick={props.onSideMenuToggle}>
      <div className={classes['menu-btn__bar']}></div>
      <div className={classes['menu-btn__bar']}></div>
      <div className={classes['menu-btn__bar']}></div>
    </div>
  );
};

export default MenuButton;

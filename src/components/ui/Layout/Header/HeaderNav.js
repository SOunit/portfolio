import classes from './HeaderNav.module.css';

const HeaderNav = () => {
  return (
    <nav className={classes['main-nav']}>
      <ul className={classes['nav-items']}>
        <li className={classes['nav-item']}>Work Log</li>
        <li className={classes['nav-item']}>Toolset</li>
        <li className={classes['nav-item']}>Side Projects</li>
      </ul>
    </nav>
  );
};

export default HeaderNav;

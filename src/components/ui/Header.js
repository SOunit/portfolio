import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes['header']}>
      <h1 className={classes['header__title']}>Portfolio</h1>
      <nav className={classes['main-nav']}>
        <ul className={classes['nav-items']}>
          <li className={classes['nav-item']}>Work Log</li>
          <li className={classes['nav-item']}>Toolset</li>
          <li className={classes['nav-item']}>Side Projects</li>
        </ul>
      </nav>
      <div className={classes['menu-btn']}>
        <div className={classes['menu-btn__bar']}></div>
        <div className={classes['menu-btn__bar']}></div>
        <div className={classes['menu-btn__bar']}></div>
      </div>
    </header>
  );
};

export default Header;

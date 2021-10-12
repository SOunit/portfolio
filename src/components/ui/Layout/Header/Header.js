import classes from './Header.module.css';
import HeaderNav from './HeaderNav';
import MenuButton from './MenuButton';

const Header = () => {
  return (
    <header className={classes['header']}>
      <h1 className={classes['header__title']}>Portfolio</h1>
      <HeaderNav />
      <MenuButton />
    </header>
  );
};

export default Header;

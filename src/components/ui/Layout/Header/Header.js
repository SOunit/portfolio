import classes from './Header.module.css';
import HeaderNav from './HeaderNav';
import MenuButton from './MenuButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = (props) => {
  return (
    <header className={classes['header']}>
      <AnchorLink href='#top' offset='90' className={classes['header__link']}>
        <h1 className={classes['header__title']}>Portfolio</h1>
      </AnchorLink>
      <HeaderNav />
      <MenuButton onSideMenuToggle={props.onSideMenuToggle} />
    </header>
  );
};

export default Header;

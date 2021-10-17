import { Fragment, useState } from 'react';
import Header from './Header/Header';
import classes from './Layout.module.css';
import SideMenu from './SideMenu/SideMenu';

const Layout = (props) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const sideMenuCloseHandler = () => {
    setIsSideMenuOpen(false);
  };

  const sideMenuToggleHandler = () => {
    setIsSideMenuOpen((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Header onSideMenuToggle={sideMenuToggleHandler} />
      <main className={classes['main']}>
        <SideMenu
          onSideMenuClose={sideMenuCloseHandler}
          isOpen={isSideMenuOpen}
        />
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;

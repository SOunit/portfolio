import { Fragment, useState } from "react";
import Header from "./Header/Header";
import classes from "./Layout.module.css";
import SideMenu from "./SideMenu/SideMenu";

const Layout = (props) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const sideMenuCloseHandler = () => {
    setIsSideMenuOpen(false);
  };

  const sideMenuToggleHandler = () => {
    setIsSideMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header onSideMenuToggle={sideMenuToggleHandler} />
      <main className={classes["main"]}>
        <SideMenu
          onSideMenuClose={sideMenuCloseHandler}
          isOpen={isSideMenuOpen}
        />
        {props.children}
      </main>
    </>
  );
};

export default Layout;

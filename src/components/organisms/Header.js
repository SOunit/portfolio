import AnchorLink from "react-anchor-link-smooth-scroll";
import HeaderNav from "../molecules/HeaderNav";
import Icons from "./Icons";
import MenuButton from "../atoms/MenuButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes["header"]}>
      <AnchorLink href="#top" offset="90" className={classes["header__link"]}>
        <h1 className={classes["header__title"]}>Portfolio</h1>
      </AnchorLink>
      <div className={classes["header__items"]}>
        <Icons />
        <HeaderNav />
        <MenuButton onSideMenuToggle={props.onSideMenuToggle} />
      </div>
    </header>
  );
};

export default Header;

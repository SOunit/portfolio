import AnchorLink from "react-anchor-link-smooth-scroll";
import HeaderNav from "../molecules/HeaderNav";
import MenuButton from "../atoms/MenuButton";
import HeaderLinkIcons from "./HeaderLinkIcons";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes["header"]}>
      <AnchorLink href="#top" offset="90" className={classes["header__link"]}>
        <h1 className={classes["header__title"]}>Portfolio</h1>
      </AnchorLink>
      <div className={classes["header__items"]}>
        <HeaderLinkIcons />
        <HeaderNav />
        <MenuButton onSideMenuToggle={props.onSideMenuToggle} />
      </div>
    </header>
  );
};

export default Header;

import { Fragment } from "react";
import Backdrop from "./Backdrop";
import AnchorLink from "react-anchor-link-smooth-scroll";
import classes from "./SideMenu.module.css";
import {
  OFFSET_SIDE_PROJECTS,
  OFFSET_TOOL_SET,
  OFFSET_WORK_LOG,
} from "../../../../util/constants";

const SideMenu = (props) => {
  return (
    <Fragment>
      {props.isOpen && <Backdrop onSideMenuClose={props.onSideMenuClose} />}
      <nav
        className={`${classes["side-menu"]} ${
          props.isOpen ? classes["side-menu--open"] : ""
        }`}
      >
        <ul className={classes["side-menu__items"]}>
          <AnchorLink
            href="#work-log"
            offset={OFFSET_WORK_LOG}
            className={classes["side-menu__link"]}
          >
            <li className={classes["side-menu__item"]}>Work Log</li>
          </AnchorLink>

          <AnchorLink
            href="#tool-set"
            offset={OFFSET_TOOL_SET}
            className={classes["side-menu__link"]}
          >
            <li className={classes["side-menu__item"]}>Toolset</li>
          </AnchorLink>
          <AnchorLink
            href="#side-projects"
            offset={OFFSET_SIDE_PROJECTS}
            className={classes["side-menu__link"]}
          >
            <li className={classes["side-menu__item"]}>Side Projects</li>
          </AnchorLink>
        </ul>
      </nav>
    </Fragment>
  );
};

export default SideMenu;

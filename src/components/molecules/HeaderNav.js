import classes from "./HeaderNav.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  OFFSET_SIDE_PROJECTS,
  OFFSET_TOOL_SET,
  OFFSET_WORK_LOG,
} from "../../constants/offset.constants";

const HeaderNav = () => {
  return (
    <nav className={classes["main-nav"]}>
      <ul className={classes["nav-items"]}>
        <AnchorLink
          className={classes["nav-item"]}
          href="#work-log"
          offset={OFFSET_WORK_LOG}
        >
          Work Log
        </AnchorLink>
        <AnchorLink
          className={classes["nav-item"]}
          href="#tool-set"
          offset={OFFSET_TOOL_SET}
        >
          Tool Set
        </AnchorLink>
        <AnchorLink
          className={classes["nav-item"]}
          href="#side-projects"
          offset={OFFSET_SIDE_PROJECTS}
        >
          Side Projects
        </AnchorLink>
        <AnchorLink
          className={classes["nav-item"]}
          href="#contact"
          offset={OFFSET_SIDE_PROJECTS}
        >
          Contact
        </AnchorLink>
      </ul>
    </nav>
  );
};

export default HeaderNav;

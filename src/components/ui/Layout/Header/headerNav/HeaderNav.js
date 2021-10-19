import classes from './HeaderNav.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  OFFSET_SIDE_PROJECTS,
  OFFSET_TOOL_SET,
  OFFSET_WORK_LOG,
} from '../../../../../util/consts';

const HeaderNav = () => {
  return (
    <nav className={classes['main-nav']}>
      <ul className={classes['nav-items']}>
        <AnchorLink
          className={classes['nav-item']}
          href='#work-log'
          offset={OFFSET_WORK_LOG}
        >
          Work Log
        </AnchorLink>
        <AnchorLink
          className={classes['nav-item']}
          href='#toolset'
          offset={OFFSET_TOOL_SET}
        >
          Toolset
        </AnchorLink>
        <AnchorLink
          className={classes['nav-item']}
          href='#side-projects'
          offset={OFFSET_SIDE_PROJECTS}
        >
          Side Projects
        </AnchorLink>
      </ul>
    </nav>
  );
};

export default HeaderNav;

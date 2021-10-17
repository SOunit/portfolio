import classes from './HeaderNav.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderNav = () => {
  return (
    <nav className={classes['main-nav']}>
      <ul className={classes['nav-items']}>
        <AnchorLink
          className={classes['nav-item']}
          href='#work-log'
          offset='75'
        >
          Work Log
        </AnchorLink>
        <AnchorLink className={classes['nav-item']} href='#toolset' offset='90'>
          Toolset
        </AnchorLink>
        <AnchorLink
          className={classes['nav-item']}
          href='#side-project'
          offset='70'
        >
          Side Projects
        </AnchorLink>
      </ul>
    </nav>
  );
};

export default HeaderNav;

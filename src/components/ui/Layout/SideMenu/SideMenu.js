import { Fragment } from 'react';
import Backdrop from './Backdrop';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classes from './SideMenu.module.css';

const SideMenu = (props) => {
  return (
    <Fragment>
      {props.isOpen && <Backdrop onSideMenuClose={props.onSideMenuClose} />}
      <nav
        className={`${classes['side-menu']} ${
          props.isOpen ? classes['side-menu--open'] : ''
        }`}
      >
        <ul className={classes['side-menu__items']}>
          <AnchorLink
            href='#work-log'
            offset='75'
            className={classes['side-menu__link']}
          >
            <li className={classes['side-menu__item']}>Work Log</li>
          </AnchorLink>

          <AnchorLink
            href='#toolset'
            offset='90'
            className={classes['side-menu__link']}
          >
            <li className={classes['side-menu__item']}>Toolset</li>
          </AnchorLink>
          <AnchorLink
            href='#side-projects'
            offset='70'
            className={classes['side-menu__link']}
          >
            <li className={classes['side-menu__item']}>Side Projects</li>
          </AnchorLink>
        </ul>
      </nav>
    </Fragment>
  );
};

export default SideMenu;

import classes from "./HeaderLinkIcon.module.css";

const HeaderLinkIcon = (props) => {
  return (
    <div className={classes["icon-wrapper"]}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <i className={`${props.iconStyle} ${classes["icon"]}`}></i>
      </a>
    </div>
  );
};

export default HeaderLinkIcon;

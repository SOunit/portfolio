import classes from "./HeaderLinkIcon.module.css";
import LinkIcon from "./LinkIcon";

const HeaderLinkIcon = (props) => {
  const { href, iconStyle } = props;
  return (
    <div className={classes["icon-wrapper"]}>
      <LinkIcon
        className={classes["header-link-icon"]}
        iconStyle={iconStyle}
        linkUrl={href}
      />
    </div>
  );
};

export default HeaderLinkIcon;

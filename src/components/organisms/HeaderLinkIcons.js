import { GITHUB_URL, LINKEDIN_URL } from "../../constants/links.constants";
import HeaderLinkIcon from "../atoms/linkIcon/HeaderLinkIcon";
import classes from "./HeaderLinkIcons.module.css";

const HeaderLinkIcons = () => {
  return (
    <div className={classes["icons"]}>
      <HeaderLinkIcon iconStyle={"fab fa-linkedin"} href={LINKEDIN_URL} />
      <HeaderLinkIcon iconStyle={"fab fa-github"} href={GITHUB_URL} />
    </div>
  );
};

export default HeaderLinkIcons;

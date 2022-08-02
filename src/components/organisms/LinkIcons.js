import { GITHUB_URL, LINKEDIN_URL } from "../../constants/links.constants";
import classes from "./LinkIcons.module.css";
import LinkIcon from "./HeaderLinkIcon";

const LinkIcons = () => {
  return (
    <div className={classes["icons"]}>
      <LinkIcon iconStyle={"fab fa-linkedin"} href={LINKEDIN_URL} />
      <LinkIcon iconStyle={"fab fa-github"} href={GITHUB_URL} />
    </div>
  );
};

export default LinkIcons;

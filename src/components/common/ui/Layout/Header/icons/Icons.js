import {
  GITHUB_URL,
  LINKEDIN_URL,
} from "../../../../../../constants/links.constants";
import Icon from "./Icon";
import classes from "./Icons.module.css";

const Icons = () => {
  return (
    <div className={classes["icons"]}>
      <Icon iconStyle={"fab fa-linkedin"} href={LINKEDIN_URL} />
      <Icon iconStyle={"fab fa-github"} href={GITHUB_URL} />
    </div>
  );
};

export default Icons;

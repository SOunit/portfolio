import React from "react";
import DemoLinkIcon from "./DemoLinkIcon";
import GithubLinkIcon from "./GithubLinkIcon";
import classes from "./LinkIcons.module.css";

const LinkIcons = (props) => {
  const { githubUrl, demoUrl } = props;

  return (
    <div className={classes["linkIcons"]}>
      {githubUrl && <GithubLinkIcon githubUrl={githubUrl} />}
      {demoUrl && <DemoLinkIcon demoUrl={demoUrl} />}
    </div>
  );
};

export default LinkIcons;

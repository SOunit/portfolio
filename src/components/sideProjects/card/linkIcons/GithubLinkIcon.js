import React from "react";
import LinkIcon from "./LinkIcon";

const GithubLinkIcon = (props) => {
  const { githubUrl } = props;

  return <LinkIcon iconStyle="fab fa-github" linkUrl={githubUrl} />;
};

export default GithubLinkIcon;

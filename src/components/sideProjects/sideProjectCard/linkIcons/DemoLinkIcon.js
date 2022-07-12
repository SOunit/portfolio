import React from "react";
import LinkIcon from "./LinkIcon";

const DemoLinkIcon = (props) => {
  const { demoUrl } = props;

  return <LinkIcon iconStyle="fas fa-search" linkUrl={demoUrl} />;
};

export default DemoLinkIcon;

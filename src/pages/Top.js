import React from "react";
import Layout from "../components/molecules/Layout";
import Contact from "../components/organisms/Contact";
import SideProjects from "../components/organisms/SideProjects";
import ToolSet from "../components/organisms/ToolSet";
import Welcome from "../components/organisms/Welcome";
import WorkLog from "../components/organisms/WorkLog";

const Top = () => {
  return (
    <Layout>
      <Welcome />
      <WorkLog />
      <ToolSet />
      <SideProjects />
      <Contact />
    </Layout>
  );
};

export default Top;

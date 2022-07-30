import SideProjects from "./components/sideProjects/SideProjects";
import Welcome from "./components/welcome/Welcome";
import WorkLog from "./components/workLog/WorkLog";
import ToolSet from "./components/toolSet/ToolSet";
import Layout from "./components/common/ui/Layout/Layout";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Layout>
      <Welcome />
      <WorkLog />
      <ToolSet />
      <SideProjects />
      <Contact />
    </Layout>
  );
}

export default App;

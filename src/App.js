import SideProjects from "./components/sideProjects/SideProjects";
import Welcome from "./components/welcome/Welcome";
import WorkLog from "./components/workLog/WorkLog";
import ToolSet from "./components/toolSet/ToolSet";
import Layout from "./components/common/ui/Layout/Layout";

function App() {
  return (
    <Layout>
      <Welcome />
      <WorkLog />
      <ToolSet />
      <SideProjects />
    </Layout>
  );
}

export default App;

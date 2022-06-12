import SideProjects from "./components/sideProjects/SideProjects";
import Layout from "./components/ui/Layout/Layout";
import Welcome from "./components/welcome/Welcome";
import WorkLog from "./components/workLog/WorkLog";
import ToolSet from "./components/toolSet/ToolSet";

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

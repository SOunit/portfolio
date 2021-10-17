import SideProjects from './components/sideProjects/SideProjects';
import Toolset from './components/toolset/Toolset';
import Layout from './components/ui/Layout/Layout';
import Welcome from './components/welcome/Welcome';
import Worklog from './components/worklog/Worklog';

function App() {
  return (
    <Layout>
      <Welcome />
      <Worklog />
      <Toolset />
      <SideProjects />
    </Layout>
  );
}

export default App;

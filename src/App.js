import SideProjects from './components/sideProjects/SideProjects';
import Toolset from './components/toolset/Toolset';
import Layout from './components/ui/Layout/Layout';
import Worklog from './components/worklog/Worklog';

function App() {
  return (
    <Layout>
      <Worklog />
      <Toolset />
      <SideProjects />
    </Layout>
  );
}

export default App;

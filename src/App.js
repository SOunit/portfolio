import Toolset from './components/toolset/Toolset';
import Layout from './components/ui/Layout/Layout';
import Worklog from './components/worklog/Worklog';

function App() {
  return (
    <Layout>
      <Worklog />
      <Toolset />
    </Layout>
  );
}

export default App;

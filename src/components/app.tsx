import './app.scss';

import Layout from '../layout/layout';
import { Header } from './organisms/header/header';

const App = () => {
  return (
    <Layout>
      <Header />
      <main className="app">
        <h1>main</h1>
      </main>
    </Layout>
  );
};

export default App;

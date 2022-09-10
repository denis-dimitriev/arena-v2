import './app.scss';

import Layout from '../layout/layout';
import { Header } from './organisms/header/header';
import { useScrollTranslateElement } from './hooks/useScrollTranslateElement';

const App = () => {
  const { translate } = useScrollTranslateElement();

  return (
    <Layout>
      <Header />
      <main className={`main main__container ${translate && 'main_up'}`}>
        <h1>main</h1>
      </main>
    </Layout>
  );
};

export default App;

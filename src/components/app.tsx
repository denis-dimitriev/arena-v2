import './app.scss';

import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Authentication from './pages/authentication/authentication';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="authentication" element={<Authentication />} />
    </Routes>
  );
};

export default App;

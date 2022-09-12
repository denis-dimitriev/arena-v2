import './app.scss';

import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Authentication from './pages/authentication/authentication';
import Homepage from './pages/homepage/homepage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path="authentication" element={<Authentication />} />
    </Routes>
  );
};

export default App;

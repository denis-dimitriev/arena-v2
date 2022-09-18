import './app.scss';

import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Authentication from './pages/authentication/authentication';
import Homepage from './pages/homepage/homepage';
import UserCabinet from './pages/user-cabinet/user-cabinet';
import { PrivateRoutes } from '../utils/private-routes';
import AddAdvertisement from './pages/add-advertisement/add-advertisement';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="home/*" element={<Homepage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="user-cabinet" element={<UserCabinet />} />
          <Route path="add-new-advertisement" element={<AddAdvertisement />} />
        </Route>
      </Route>
      <Route path="authentication" element={<Authentication />} />
    </Routes>
  );
};

export default App;

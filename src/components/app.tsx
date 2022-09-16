import './app.scss';

import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Authentication from './pages/authentication/authentication';
import Homepage from './pages/homepage/homepage';
import Products from './pages/products/products';
import Bicycles from './pages/bicycles/bicycles';
import ElectricBicycles from './pages/electric-bicycles/electric-bicycles';
import ElectricScooters from './pages/electric-scooters/electric-scooters';
import PartsAndAccessories from './pages/parts-and-accessories/parts-and-accessories';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="home/*" element={<Homepage />} />
      </Route>
      <Route path="authentication" element={<Authentication />} />
    </Routes>
  );
};

export default App;

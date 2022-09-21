import './homepage.scss';

import { MainCategory } from '../../molecules/main-category/main-category';
import { Outlet, Route, Routes } from 'react-router-dom';
import Products from '../products/products';
import Bicycles from '../bicycles/bicycles';
import ElectricBicycles from '../electric-bicycles/electric-bicycles';
import ElectricScooters from '../electric-scooters/electric-scooters';
import PartsAndAccessories from '../parts-and-accessories/parts-and-accessories';
import Liked from '../liked/liked';
import Watched from '../watched/watched';

const Homepage = () => {
  return (
    <div id="homepage" className="homepage">
      <div className="homepage__container">
        <h3 className="fw-bold text-center">Категории</h3>
        <MainCategory />
        <Routes>
          <Route index element={<Products />} />
          <Route path="bicycles" element={<Bicycles />} />
          <Route path="bicycles/:id" element={<Bicycles />} />
          <Route path="electric-bicycles" element={<ElectricBicycles />} />
          <Route path="electric-scooters" element={<ElectricScooters />} />
          <Route path="parts-and-accessories" element={<PartsAndAccessories />} />
          <Route path="liked" element={<Liked />} />
          <Route path="watched" element={<Watched />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;

import './main-category.scss';

import { Link } from 'react-router-dom';
import { BicycleIcon, EBicycleIcon, EScooterIcon, Parts_AccessoriesIcon } from '../../../assets';

export const MainCategory = () => {
  return (
    <div className="main-category container">
      <ul className="nav nav-pills nav-justified">
        <li className="nav-item">
          <Link to="home/bicycles" className="nav-link text-black">
            <BicycleIcon />
            Велосипеды
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home/electric-bicycles" className="nav-link text-black">
            <EBicycleIcon />
            Электровелосипеды
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home/electric-scooters" className="nav-link text-black">
            <EScooterIcon />
            Электроскутеры
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home/parts-and-accessories" className="nav-link text-black">
            <Parts_AccessoriesIcon />
            Аксессуары
          </Link>
        </li>
      </ul>
    </div>
  );
};

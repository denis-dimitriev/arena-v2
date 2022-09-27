import React from 'react';
import { ProductList } from '../../organisms/product-list/product-list';
import { electricBicycleAds } from '../../../moco-data/moco-e-bicycles-ads';

const ElectricBicycles = () => {
  return (
    <div>
      <h3 className="fw-bold text-start mt-5">Электровелосипеды</h3>
      <ProductList products={electricBicycleAds} />
    </div>
  );
};

export default ElectricBicycles;

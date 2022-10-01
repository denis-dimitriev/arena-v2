import React, { Fragment } from 'react';
import { ProductList } from '../../organisms/product-list/product-list';
import { electricScooterAds } from '../../../moco-data/moco-e-scooter-ads';

const ElectricScooters = () => {
  return (
    <Fragment>
      <h3 className="fw-bold text-start mt-5">Электросамокаты</h3>
      <ProductList products={electricScooterAds} />
    </Fragment>
  );
};

export default ElectricScooters;

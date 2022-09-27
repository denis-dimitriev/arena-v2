import { Fragment } from 'react';
import { ProductList } from '../../organisms/product-list/product-list';
import { bicycleAds } from '../../../moco-data/moco-bicycles-ads';

const Bicycles = () => {
  return (
    <Fragment>
      <h3 className="fw-bold text-start mt-5">Велосипеды</h3>
      <ProductList products={bicycleAds} />
    </Fragment>
  );
};

export default Bicycles;

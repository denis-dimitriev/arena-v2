import { Fragment } from 'react';
import { ProductList } from '../../organisms/product-list/product-list';
import { bicycleAds } from '../../../moco-data/moco-bicycles-ads';

const Products = () => {
  return (
    <Fragment>
      <h3 className="fw-bold text-center mt-5">Последние объявления</h3>
      <ProductList products={bicycleAds} />
    </Fragment>
  );
};

export default Products;

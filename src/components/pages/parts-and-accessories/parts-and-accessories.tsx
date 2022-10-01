import { Fragment } from 'react';
import { ProductList } from '../../organisms/product-list/product-list';
import { accessoriesAds } from '../../../moco-data/moco-accessories-ads';

const PartsAndAccessories = () => {
  return (
    <Fragment>
      <h3 className="fw-bold text-start mt-5">Акссесуары и запчасти</h3>
      <ProductList products={accessoriesAds} />
    </Fragment>
  );
};

export default PartsAndAccessories;

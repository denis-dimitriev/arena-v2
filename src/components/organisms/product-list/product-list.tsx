import { CardItem } from '../../molecules/card-item/card-item';

import {
  IAccessoriesAdvertisement,
  IBicycleAdvertisement,
  IEBicycleAdvertisement,
  IEScootersAdvertisement
} from '../../../types/advertisement';

interface ProductListProps {
  products:
    | IBicycleAdvertisement[]
    | IEBicycleAdvertisement[]
    | IEScootersAdvertisement[]
    | IAccessoriesAdvertisement[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="row justify-content-center gy-3 gap-3">
      {products?.map((product) => (
        <CardItem key={product.title + product.id} product={product} />
      ))}
    </div>
  );
};

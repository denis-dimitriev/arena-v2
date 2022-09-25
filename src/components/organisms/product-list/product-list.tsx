import { CardItem } from '../../molecules/card-item/card-item';
import {
  IAccessoriesAdvertisement,
  IBicycleAdvertisement,
  IEBicycleAdvertisement,
  IEScootersAdvertisement
} from '../../../types/advertisement';
import { Link } from 'react-router-dom';

interface ProductListProps {
  products:
    | IBicycleAdvertisement[]
    | IEBicycleAdvertisement[]
    | IEScootersAdvertisement[]
    | IAccessoriesAdvertisement[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const categoriesPath = {
    Велосипеды: 'bicycles',
    Электровелосипеды: 'electric-bicycles',
    Электросамокаты: 'electric-scooters',
    Аксессуары: 'parts-and-accessories'
  };

  return (
    <div className="row justify-content-center gy-3 gap-3">
      {products?.map((product) => {
        const { id, category, title, images, price, currency, createdAt } = product;
        return (
          <Link key={id} to={`/home/${categoriesPath[category]}/${id}`}>
            <CardItem
              title={title}
              images={images}
              price={price}
              currency={currency}
              createdAt={createdAt}
            />
          </Link>
        );
      })}
    </div>
  );
};

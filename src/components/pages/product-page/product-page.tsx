import { Col, Row } from 'react-bootstrap';
import { ProductItemImages } from '../../molecules/product-item-images/product-item-images';
import { FavoriteIcon, FavoriteRedIcon } from '../../../assets';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { bicycleAds } from '../../../moco-data/moco-bicycles-ads';
import { Spinner } from '../../ui/atoms/spinner/spinner';
import { electricBicycleAds } from '../../../moco-data/moco-e-bicycles-ads';
import { electricScooterAds } from '../../../moco-data/moco-e-scooter-ads';
import { accessoriesAds } from '../../../moco-data/moco-accessories-ads';
import { ProductType } from '../../../types/general';

const ProductPage = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (id) {
      if (pathname.includes('bicycle')) {
        const item = bicycleAds.find((item) => item.id === +id);
        if (item) setProduct(item);
      }

      if (pathname.includes('electric-bicycles')) {
        const item = electricBicycleAds.find((item) => item.id === +id);
        if (item) setProduct(item);
      }

      if (pathname.includes('electric-scooters')) {
        const item = electricScooterAds.find((item) => item.id === +id);
        if (item) setProduct(item);
      }

      if (pathname.includes('parts-and-accessories')) {
        const item = accessoriesAds.find((item) => item.id === +id);
        if (item) setProduct(item);
      }
    }
  }, []);

  if (product === null) return <Spinner />;

  const onFavoriteClickHandler = () => {
    setProduct((prev) => {
      if (prev !== null) {
        return {
          ...prev,
          isFavorite: !prev.isFavorite
        };
      }
      return prev;
    });
  };

  return (
    <div className="d-flex flex-column mt-5 gap-5">
      <h3 className="fw-normal fs-4 text-start d-flex align-items-center">
        {product.title}
        <button className="mx-3 btn border-white p-0 " onClick={onFavoriteClickHandler}>
          {product.isFavorite ? <FavoriteRedIcon /> : <FavoriteIcon />}
        </button>
      </h3>
      <Row>
        <Col sm={9}>
          <ProductItemImages images={product.images} />
        </Col>
        <Col sm={3}>
          <h1>Author info</h1>
        </Col>
      </Row>
      <Col></Col>
    </div>
  );
};

export default ProductPage;

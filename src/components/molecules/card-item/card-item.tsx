import './card-item.scss';

import { FavoriteIcon, FavoriteRedIcon } from '../../../assets';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ProductType } from '../../../types/general';

interface CardProps {
  product: ProductType;
}

const categoriesPath = {
  Велосипеды: 'bicycles',
  Электровелосипеды: 'electric-bicycles',
  Электросамокаты: 'electric-scooters',
  Аксессуары: 'parts-and-accessories'
};

export const CardItem = ({ product }: CardProps) => {
  const [productCard, setProductCard] = useState(product);

  const { id, title, category, createdAt, currency, price, images, isFavorite } = productCard;

  const thumbnail = images[0];

  const onFavoriteClickHandler = () => {
    setProductCard((prev) => {
      return {
        ...prev,
        isFavorite: !isFavorite
      };
    });
  };

  return (
    <Card className="card-item">
      <Link to={`/home/${categoriesPath[category]}/${id}`}>
        <Card.Img variant="top" src={thumbnail} height={180} />
        <Card.Body>
          <p className="fw-normal">{title}</p>
        </Card.Body>
      </Link>
      <Card.Footer className="bg-white border-0">
        <small className="text-muted">Создано: {`${createdAt}`}</small>
        <span className="d-flex align-items-center justify-content-between">
          <p className="card-text m-0 text-danger">
            {price}&nbsp;{currency}
          </p>
          <button className="btn border-white p-0" onClick={onFavoriteClickHandler}>
            {isFavorite ? <FavoriteRedIcon /> : <FavoriteIcon />}
          </button>
        </span>
      </Card.Footer>
    </Card>
  );
};

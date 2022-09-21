import './card-item.scss';

import { FavoriteIcon } from '../../../assets';
import { Card } from 'react-bootstrap';
import { CurrencyType } from '../../../types/general';

interface CardProps {
  title: string;
  price: number | 'договорная';
  currency?: CurrencyType;
  createdAt: Date;
  images: string[];
}

export const CardItem = ({ title, createdAt, currency, price, images }: CardProps) => {
  const thumbnail = images[0];

  return (
    <Card className="card-item">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <small className="fw-normal">{title}</small>
      </Card.Body>
      <Card.Footer className="bg-white border-0">
        <small className="text-muted">{`${createdAt}`}</small>
        <span className="d-flex align-items-center justify-content-between">
          <p className="card-text m-0 text-danger">
            {price}&nbsp;{currency}
          </p>
          <button className="btn border-white p-0">
            <FavoriteIcon />
          </button>
        </span>
      </Card.Footer>
    </Card>
  );
};

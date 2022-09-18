import './card-item.scss';

import { FavoriteIcon } from '../../../assets';
import { Card } from 'react-bootstrap';

interface CardProps {
  title: string;
}

export const CardItem = ({ title }: CardProps) => {
  return (
    <Card className="card-item">
      <Card.Img
        variant="top"
        src="https://i.simpalsmedia.com/999.md/BoardImages/320x240/408e299ed702e0aff3ba20e896722af6.jpg"
      />
      <Card.Body>
        <p className="fw-semibold">{title}</p>
      </Card.Body>
      <Card.Footer className="bg-white border-0">
        <small className="text-muted">Last updated 3 mins ago</small>
        <span className="d-flex align-items-center justify-content-between">
          <p className="card-text m-0">1920 eur</p>
          <button className="btn border-white">
            <FavoriteIcon />
          </button>
        </span>
      </Card.Footer>
    </Card>
  );
};

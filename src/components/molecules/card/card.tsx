import './card.scss';

import { FavoriteIcon } from '../../../assets';

interface CardProps {
  title: string;
}

export const Card = ({ title }: CardProps) => {
  return (
    <div className="card p-0">
      <img
        src="https://i.simpalsmedia.com/999.md/BoardImages/320x240/408e299ed702e0aff3ba20e896722af6.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="fw-semibold">{title}</p>
      </div>
      <div className="card-footer bg-white">
        <small className="text-muted">Last updated 3 mins ago</small>
        <span className="d-flex align-items-center justify-content-between">
          <p className="card-text m-0">1920 eur</p>
          <button className="btn border-white">
            <FavoriteIcon />
          </button>
        </span>
      </div>
    </div>
  );
};

import './card.scss';

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
        <h6 className="card-title">{title}</h6>
      </div>
      <div className="card-footer bg-white">
        <small className="text-muted">Last updated 3 mins ago</small>
        <p className="card-text">1920 eur</p>
      </div>
    </div>
  );
};

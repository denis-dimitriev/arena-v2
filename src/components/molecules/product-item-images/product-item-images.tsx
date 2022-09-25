import './product-item-images.scss';

import {Button, Image} from 'react-bootstrap';
import {ArrowLeftIcon, ArrowRightIcon} from '../../../assets';
import {useState} from 'react';

const images = [
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/c47b6f06030b6061eaa077e2059e583b.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/fb1ed86a99042542ec20c748b1e7685f.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/c60f7e49e29327703bd32ac8f054b1f8.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/efe114151f286ee22c13f586001477dd.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/5ac991de67d327705cf75729e44b912a.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/124f71ff15f4849b90ea9ea181659813.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/1ac862a4b6d9a65c1a588a7ae1b5a044.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/508d0e8027dea19aeba3d240876f8389.jpg'
];

export const ProductItemImages = () => {
  const [pos, setPos] = useState<number>(0);

  const limitPosition = (images.length - 1) * 100;

  const moveRightHandler = () => {
    setPos((prev) => {
      if (prev === -limitPosition) {
        return 0
      }
      return prev - 100;
    });
  };

  const moveLeftHandler = () => {
    setPos((prev) => {
      if (prev === 0) {
        return -limitPosition
      }
      return prev + 100;
    });
  };

  const onThumbnailClickHandler = (target: string) => {
    images.forEach((value, index) => {
      if (value === target) {
        console.log(index * 100)
        setPos(-(index * 100))
      }
    })
  }

  return (
      <div className="product-item-images">
        <div className="slider">
          <ul className="slider__list">
            {images.map((image) => (
                <li key={image} className="slider__list-item" style={{transform: `translateX(${pos}%)`}}>
                  <Image src={image}/>
                </li>
            ))}
          </ul>
          <div className="slider__actions">
            <Button variant="light" onClick={moveLeftHandler}>
              <ArrowLeftIcon/>
            </Button>
            <Button variant="light" onClick={moveRightHandler}>
              <ArrowRightIcon/>
            </Button>
          </div>
        </div>
        <div className="images">
          <ul className="images__list">
            {images.map((image) => (
                <li key={image} className="images__list-item" onClick={() => onThumbnailClickHandler(image)}>
                  <Image src={image} width={75}/>
                </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

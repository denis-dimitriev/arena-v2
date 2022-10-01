import './product-item-images.scss';

import { Button, Image } from 'react-bootstrap';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../assets';
import { useState } from 'react';

interface ProductItemImagesProps {
  images: string[];
}

export const ProductItemImages = ({ images }: ProductItemImagesProps) => {
  const [pos, setPos] = useState<number>(0);

  const limitPosition = (images.length - 1) * 100;

  const moveRightHandler = () => {
    setPos((prev) => {
      if (prev === -limitPosition) {
        return 0;
      }
      return prev - 100;
    });
  };

  const moveLeftHandler = () => {
    setPos((prev) => {
      if (prev === 0) {
        return -limitPosition;
      }
      return prev + 100;
    });
  };

  const onThumbnailClickHandler = (target: string) => {
    images.forEach((value, index) => {
      if (value === target) {
        setPos(-(index * 100));
      }
    });
  };

  return (
    <div className="product-item-images">
      <div className="slider">
        <ul className="slider__list">
          {images.map((image) => (
            <li
              key={image}
              className="slider__list-item"
              style={{ transform: `translateX(${pos}%)` }}>
              <Image src={image} />
            </li>
          ))}
        </ul>
        <div className="slider__actions">
          <Button variant="light" onClick={moveLeftHandler}>
            <ArrowLeftIcon />
          </Button>
          <Button variant="light" onClick={moveRightHandler}>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className="images">
        <ul className="images__list">
          {images.map((image) => (
            <li
              key={image}
              className="images__list-item"
              onClick={() => onThumbnailClickHandler(image)}>
              <Image src={image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import './product-item-images.scss';

import { Button, Image } from 'react-bootstrap';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../assets';
import { useState } from 'react';

const images = [
  'https://i.simpalsmedia.com/999.md/BoardImages/900x900/bd178622c42bad4fa746f1037e0a7c2f.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/900x900/e531b2d189f9b4f66fd9c02fd4e8d9f8.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/900x900/970a8706c800f03a91754aa56d95ab8d.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/900x900/5886a93ad27a193f148975b4bb453181.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/900x900/e8b1cb528781d4063a6e306819f460e4.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/900x900/a1b38a0b6e6249c24aa4d638210f6238.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/900x900/959841f857ad916e891ec334861ab4f4.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/900x900/57a2a28bccb51e82e989d2d74f99fd1f.jpg'
];

export const ProductItemImages = () => {
  const [adsImages, setAdsImages] = useState<string[]>(images);
  const [pos, setPos] = useState<number>(0);

  const itemWidth = 310;
  const totalItems = adsImages.length;
  const sliderWidth = totalItems * itemWidth;

  const moveRightHandler = () => {
    setPos((prev) => {
      return prev - itemWidth;
    });
  };

  const moveLeftHandler = () => {
    setPos((prev) => {
      return prev + itemWidth;
    });
  };

  return (
    <div className="product-item-images">
      <div className="slider">
        <div className="slider__list">
          {adsImages.map((image) => (
            <Image key={image} src={image} />
          ))}
        </div>
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
          {adsImages.map((image) => (
            <li key={image} className="images__list-item">
              <Image src={image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

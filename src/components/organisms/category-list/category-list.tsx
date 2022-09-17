import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import { CardItem } from '../../molecules/card-item/card-item';
import { Row } from 'react-bootstrap';

export const CategoryList = () => {
  return (
    <div className="container-sm">
      <Row className="p-5 gap-2 gy-3">
        <CardItem title={'Bicicleta de munte professionala'} />
        <CardItem
          title={
            'Белорусские велосипеды aist в ассортименте / biciclete pentru adulti in sortiment "aist"'
          }
        />
        <CardItem
          title={
            'Новые велосипеды. Самые низкие цены. Бесплатная доставка. 0% на 4 месяца . Гарантия'
          }
        />
        <CardItem title={'Specialized'} />
        <CardItem title={'Specialized'} />
        <CardItem title={'Specialized'} />
        <CardItem title={'Specialized'} />
        <CardItem title={'Specialized'} />
        <CardItem title={'Specialized'} />
      </Row>
    </div>
  );
};

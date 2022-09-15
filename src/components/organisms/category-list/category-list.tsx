import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../molecules/card/card';

export const CategoryList = () => {
  return (
    <div className="container-lg">
      <div className="row row-cols-1 row-cols-md-4 gap-3 justify-content-center">
        <Card title={'Bicicleta de munte professionala'} />
        <Card
          title={
            'Белорусские велосипеды aist в ассортименте / biciclete pentru adulti in sortiment "aist"'
          }
        />
        <Card
          title={
            'Новые велосипеды. Самые низкие цены. Бесплатная доставка. 0% на 4 месяца . Гарантия'
          }
        />
        <Card title={'Specialized'} />
        <Card title={'Specialized'} />
        <Card title={'Specialized'} />
        <Card title={'Specialized'} />
        <Card title={'Specialized'} />
        <Card title={'Specialized'} />
      </div>
    </div>
  );
};

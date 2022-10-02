import { Accordion, Col, Form } from 'react-bootstrap';
import { Checkbox } from '../../ui/atoms/checkbox/checkbox';
import { regions } from '../../../models/region';
import { CategoryType } from '../../../types/general';
import {
  bicycleBrands,
  bicycleTypes,
  brakes,
  components,
  frameMaterials,
  frameSizes,
  options,
  suspension,
  wheelSizes
} from '../../../models/bicycle-specs';
import { ChangeEvent, Fragment, useCallback, useState } from 'react';
import { colors, conditions } from '../../../models/general';
import { eBicycleBrands } from '../../../models/e-bicycle-specs';

interface ProductFiltersProps {
  category?: CategoryType | null;
}

export const ProductFilters = ({ category }: ProductFiltersProps) => {
  const [price, setPrice] = useState<number>(0);
  const [negotiable, setNegotiable] = useState<boolean>(false);

  const onRangeChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    setPrice(value);
  }, []);

  const onNegotiableCheckedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setNegotiable(checked);
  };

  const categoryFilter = function () {
    switch (category) {
      case 'Велосипеды':
      case 'Электровелосипеды':
        return (
          <Fragment>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Опции</Accordion.Header>
              <Accordion.Body>
                {options.map((option) => (
                  <Checkbox key={option} label={option} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Тип</Accordion.Header>
              <Accordion.Body>
                {bicycleTypes.map((type) => (
                  <Checkbox key={type} label={type} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Бренд</Accordion.Header>
              {category == 'Велосипеды' ? (
                <Accordion.Body>
                  {bicycleBrands.map((brand) => (
                    <Checkbox key={brand} label={brand} />
                  ))}
                </Accordion.Body>
              ) : (
                <Accordion.Body>
                  {eBicycleBrands.map((brand) => (
                    <Checkbox key={brand} label={brand} />
                  ))}
                </Accordion.Body>
              )}
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Размер рамы</Accordion.Header>
              <Accordion.Body>
                {frameSizes.map((size) => (
                  <Checkbox key={size} label={`${size}"`} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>Материал</Accordion.Header>
              <Accordion.Body>
                {frameMaterials.map((material) => (
                  <Checkbox key={material} label={material} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>Размер колес</Accordion.Header>
              <Accordion.Body>
                {wheelSizes.map((size) => (
                  <Checkbox key={size} label={`${size}"`} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>Обвес</Accordion.Header>
              <Accordion.Body>
                {components.map((component) => (
                  <Checkbox key={component} label={component} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>Тип тормоза</Accordion.Header>
              <Accordion.Body>
                {brakes.map((brake) => (
                  <Checkbox key={brake} label={brake} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13">
              <Accordion.Header>Подвеска</Accordion.Header>
              <Accordion.Body>
                {suspension.map((suspension) => (
                  <Checkbox key={suspension} label={suspension} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="14">
              <Accordion.Header>Цвет</Accordion.Header>
              <Accordion.Body>
                {colors.map((color) => (
                  <Checkbox key={color} label={color} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Fragment>
        );
      case 'Электросамокаты':
        return;
      case 'Аксессуары':
        return;
      default:
        return <></>;
    }
  };

  return (
    <Col sm={3} className="mb-4">
      <Accordion defaultActiveKey={['0', '2', '3']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Сортировка</Accordion.Header>
          <Accordion.Body>
            <Checkbox label={'по цене (дешевле)'} />
            <Checkbox label={'по цене (дороже)'} />
            <Checkbox label={'по дате (новые)'} />
            <Checkbox label={'по дате (старые)'} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Регион</Accordion.Header>
          <Accordion.Body>
            {regions.map((region) => (
              <Checkbox key={region} label={region} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Цена</Accordion.Header>
          <Accordion.Body>
            <Form.Label>{price} mdl</Form.Label>
            <Form.Range onChange={onRangeChangeHandler} value={price} disabled={negotiable} />
            <Checkbox label={'договорная'} onChange={onNegotiableCheckedHandler} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Тип предложения</Accordion.Header>
          <Accordion.Body>
            <Checkbox label={'Продам'} />
            <Checkbox label={'Куплю'} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Состояние</Accordion.Header>
          <Accordion.Body>
            {conditions.map((condition) => (
              <Checkbox key={condition} label={condition} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        {categoryFilter()}
      </Accordion>
    </Col>
  );
};

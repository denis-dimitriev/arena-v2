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
import { eScooterBrands } from '../../../models/e-scooter-specs';
import { accessories, parts } from '../../../models/accessories';

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

  const onMinPriceFilterHandler = () => {};
  const onMaxPriceFilterHandler = () => {};
  const onNewDateFilterHandler = () => {};
  const onOldDateFilterHandler = () => {};
  const onLocationFilterHandler = () => {};
  const onPriceFilterHandler = () => {};
  const onOfferTypeFilterHandler = () => {};
  const onConditionFilterHandler = () => {};
  const onOptionFilterHandler = () => {};
  const onBicycleTypeFilterHandler = () => {};
  const onBrandFilterHandler = () => {};
  const onFrameSizeFilterHandler = () => {};
  const onWheelSizeFilterHandler = () => {};
  const onMaterialFilterHandler = () => {};
  const onComponentsFilterHandler = () => {};
  const onBrakesTypeFilterHandler = () => {};
  const onSuspensionTypeFilterHandler = () => {};
  const onColorFilterHandler = () => {};
  const onPartsTypeFilterHandler = () => {};
  const onAccessoriesTypeFilterHandler = () => {};

  const categoryAccordionItems = function () {
    switch (category) {
      case '????????????????????':
      case '??????????????????????????????????':
        return (
          <Fragment>
            <Accordion.Item eventKey="5">
              <Accordion.Header>??????????</Accordion.Header>
              <Accordion.Body>
                {options.map((option) => (
                  <Checkbox key={option} label={option} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>??????</Accordion.Header>
              <Accordion.Body>
                {bicycleTypes.map((type) => (
                  <Checkbox key={type} label={type} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>??????????</Accordion.Header>
              {category == '????????????????????' ? (
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
              <Accordion.Header>???????????? ????????</Accordion.Header>
              <Accordion.Body>
                {frameSizes.map((size) => (
                  <Checkbox key={size} label={`${size}"`} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>????????????????</Accordion.Header>
              <Accordion.Body>
                {frameMaterials.map((material) => (
                  <Checkbox key={material} label={material} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>???????????? ??????????</Accordion.Header>
              <Accordion.Body>
                {wheelSizes.map((size) => (
                  <Checkbox key={size} label={`${size}"`} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>??????????</Accordion.Header>
              <Accordion.Body>
                {components.map((component) => (
                  <Checkbox key={component} label={component} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>?????? ??????????????</Accordion.Header>
              <Accordion.Body>
                {brakes.map((brake) => (
                  <Checkbox key={brake} label={brake} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13">
              <Accordion.Header>????????????????</Accordion.Header>
              <Accordion.Body>
                {suspension.map((suspension) => (
                  <Checkbox key={suspension} label={suspension} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="14">
              <Accordion.Header>????????</Accordion.Header>
              <Accordion.Body>
                {colors.map((color) => (
                  <Checkbox key={color} label={color} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Fragment>
        );
      case '??????????????????????????????':
        return (
          <Fragment>
            <Accordion.Item eventKey="5">
              <Accordion.Header>??????????</Accordion.Header>
              <Accordion.Body>
                {eScooterBrands.map((brand) => (
                  <Checkbox key={brand} label={brand} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>????????</Accordion.Header>
              <Accordion.Body>
                {colors.map((color) => (
                  <Checkbox key={color} label={color} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Fragment>
        );
      case '????????????????????':
        return (
          <Fragment>
            <Accordion.Item eventKey="5">
              <Accordion.Header>?????? ??????????????????</Accordion.Header>
              <Accordion.Body>
                {parts.map((part) => (
                  <Checkbox key={part} label={part} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>?????? ??????????????????????????</Accordion.Header>
              <Accordion.Body>
                {accessories.map((acc) => (
                  <Checkbox key={acc} label={acc} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Fragment>
        );
      default:
        return <></>;
    }
  };

  return (
    <Col sm={3} className="mb-4">
      <Accordion defaultActiveKey={['0', '2', '3']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>????????????????????</Accordion.Header>
          <Accordion.Body>
            <Checkbox label={'???? ???????? (??????????????)'} />
            <Checkbox label={'???? ???????? (????????????)'} />
            <Checkbox label={'???? ???????? (??????????)'} />
            <Checkbox label={'???? ???????? (????????????)'} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>????????????</Accordion.Header>
          <Accordion.Body>
            {regions.map((region) => (
              <Checkbox key={region} label={region} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>????????</Accordion.Header>
          <Accordion.Body>
            <Form.Label>{price} mdl</Form.Label>
            <Form.Range onChange={onRangeChangeHandler} value={price} disabled={negotiable} />
            <Checkbox label={'????????????????????'} onChange={onNegotiableCheckedHandler} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>?????? ??????????????????????</Accordion.Header>
          <Accordion.Body>
            <Checkbox label={'????????????'} />
            <Checkbox label={'??????????'} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>??????????????????</Accordion.Header>
          <Accordion.Body>
            {conditions.map((condition) => (
              <Checkbox key={condition} label={condition} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        {categoryAccordionItems()}
      </Accordion>
    </Col>
  );
};

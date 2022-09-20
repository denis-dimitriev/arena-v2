import { CategoryType } from '../../../types/general';
import { Col, Row } from 'react-bootstrap';
import { CustomSelect } from '../../molecules/custom-select/custom-select';
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
import { colors, conditions } from '../../../models/general';
import { eBicycleBrands } from '../../../models/e-bicycle-specs';
import { eScooterBrands } from '../../../models/e-scooter-specs';
import { accessories, parts } from '../../../models/accessories';
import { CustomInputText } from '../../molecules/custom-input-text/custom-input-text';

interface AddSpecificationsProps {
  category: CategoryType | string | null;
}

export const AddSpecifications = ({ category }: AddSpecificationsProps) => {
  switch (category) {
    case 'Велосипеды':
      return (
        <Row className="mb-3">
          <Col xs={2}>
            <CustomSelect label={'Тип'} options={bicycleTypes} />
            <CustomSelect label={'Материал'} options={frameMaterials} />
            <CustomSelect label={'Тип тормоза'} options={brakes} />
            <CustomSelect label={'Опции'} options={options} />
          </Col>
          <Col xs={2}>
            <CustomSelect label={'Производитель'} options={bicycleBrands} />
            <CustomSelect label={'Размер рамы'} options={frameSizes} />
            <CustomSelect label={'Диаметр колес'} options={wheelSizes} />
            <CustomSelect label={'Цвет'} options={colors} />
          </Col>
          <Col xs={2}>
            <CustomSelect label={'Состояние'} options={conditions} />
            <CustomSelect label={'Обвес'} options={components} />
            <CustomSelect label={'Подвеска'} options={suspension} />
            <CustomInputText label={'Вес, кг'} />
          </Col>
        </Row>
      );
    case 'Электровелосипеды':
      return (
        <Row className="mb-3">
          <Col xs={2}>
            <CustomSelect label={'Тип'} options={bicycleTypes} />
            <CustomSelect label={'Материал'} options={frameMaterials} />
            <CustomSelect label={'Тип тормоза'} options={brakes} />
            <CustomSelect label={'Опции'} options={options} />
            <CustomInputText label={'Мощность, вт'} />
            <CustomInputText label={'Скорость, км/ч'} />
          </Col>
          <Col xs={2}>
            <CustomSelect label={'Производитель'} options={eBicycleBrands} />
            <CustomSelect label={'Размер рамы'} options={frameSizes} />
            <CustomSelect label={'Диаметр колес'} options={wheelSizes} />
            <CustomSelect label={'Цвет'} options={colors} />
            <CustomInputText label={'Км на 1ом заряде'} />
            <CustomInputText label={'Ёмкость акк. А/ч'} />
          </Col>
          <Col xs={2}>
            <CustomSelect label={'Состояние'} options={conditions} />
            <CustomSelect label={'Обвес'} options={components} />
            <CustomSelect label={'Подвеска'} options={suspension} />
            <CustomInputText label={'Вес, кг'} />
            <CustomInputText label={'Время зарядки ч.'} />
          </Col>
        </Row>
      );
    case 'Электросамокаты':
      return (
        <Row className="mb-3">
          <Col xs={2}>
            <CustomSelect label={'Производитель'} options={eScooterBrands} />
            <CustomSelect label={'Цвет'} options={colors} />
            <CustomSelect label={'Состояние'} options={conditions} />
          </Col>
          <Col xs={2}>
            <CustomInputText label={'Мощность, вт'} />
            <CustomInputText label={'Скорость, км/ч'} />
            <CustomInputText label={'Ёмкость акк. А/ч'} />
          </Col>
          <Col xs={2}>
            <CustomInputText label={'Км на 1ом заряде'} />
            <CustomInputText label={'Вес, кг'} />
            <CustomInputText label={'Время зарядки ч.'} />
          </Col>
        </Row>
      );
    case 'Аксессуары':
      return (
        <Row>
          <Col xs={2}>
            <CustomSelect label={'Тип запчастей'} options={parts} />
          </Col>
          <Col xs={2}>
            <CustomSelect label={'Тип акссессуароа'} options={accessories} />
          </Col>
          <Col xs={2}>
            <CustomSelect label={'Состояние'} options={conditions} />
          </Col>
        </Row>
      );
    default:
      return <p>Не выбран ни один из разделов</p>;
  }
};

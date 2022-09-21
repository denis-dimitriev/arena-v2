import './add-advertisement.scss';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { CustomSelect } from '../../molecules/custom-select/custom-select';
import { Categories } from '../../../models/category';
import { Regions } from '../../../models/region';
import { Currencies } from '../../../models/currency';
import { AddSpecifications } from '../../features/add-specifications/add-specifications';
import { CategoryType } from '../../../types/general';
import { ChangeEvent, useState } from 'react';
import { ImageUploadForm } from '../../features/image-upload-form/image-upload-form';
import { CustomInputText } from '../../molecules/custom-input-text/custom-input-text';

const AddAdvertisement = () => {
  const [category, setCategory] = useState<CategoryType | null | string>(null);
  const [negotiable, setNegotiable] = useState<boolean>(false);

  const onSelectCategoryHandler = (event: ChangeEvent<HTMLSelectElement>) =>
    setCategory(event.target.value);

  const onSetNegotiableHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setNegotiable(event.target.checked);

  return (
    <Form className="add-ads">
      <div className="add-ads__container">
        <h3 className="fw-bold text-start mb-5">Заполните объявление</h3>
        <Row>
          <Col xs={2}>
            <CustomSelect
              label={'Раздел'}
              options={Categories}
              onChange={onSelectCategoryHandler}
            />
          </Col>
          <Col xs={2}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Тип предложения</Form.Label>
              <span className="d-flex gap-3">
                <Form.Check type="radio" name="offer" value="Продам" label="Продам" />
                <Form.Check type="radio" name="offer" value="Куплю" label="Куплю" />
              </span>
            </Form.Group>
          </Col>
        </Row>
        <CustomInputText label={'Заголовок объявления'} />
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Текст объявления</Form.Label>
          <Form.Control as="textarea" rows={8} />
        </Form.Group>
        <Row>
          <Col xs={2}>
            <CustomSelect label={'Регион'} options={Regions} />
          </Col>
          <Col xs={2}>
            <CustomInputText label={'Цена'} placeholder="0.00" disabled={negotiable} />
          </Col>
          <Col xs={2}>
            <CustomSelect label="Валюта" options={Currencies} disabled={negotiable} />
          </Col>
          <Col xs={2} className="d-flex align-items-center">
            <Form.Group className="mt-4">
              <Form.Check
                type="switch"
                value="Договорная"
                label="Договорная"
                onChange={onSetNegotiableHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Col>
          <h5 className="fw-semibold text-start mb-5 mt-5">Характеристики</h5>
          <AddSpecifications category={category} />
        </Col>
        <ImageUploadForm />
        <Form.Group className="w-25 mt-5 mb-5">
          <Button variant="primary" className="w-100" type="submit">
            Добавить объявление
          </Button>
        </Form.Group>
      </div>
    </Form>
  );
};

export default AddAdvertisement;

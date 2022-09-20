import './image-upload-form.scss';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { addPhotoPng } from '../../../assets';

export const ImageUploadForm = () => {
  const [images, setImages] = useState<string[]>([]);

  const onUploadImagesHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { files } = event.target;
    const arr: string[] = [];
    if (files) {
      const set = new Set(files);
      set.forEach((value, value2, set) => {
        arr.push(URL.createObjectURL(value));
      });
      setImages((prevState) => [...prevState, ...arr]);
    }
  };

  return (
    <Row>
      <Col xs={3}>
        <Form.Group controlId="formFile" className="mb-3 form-upload">
          <Form.Label className="fw-semibold">Загрузить изображения</Form.Label>
          <label className="form-upload__custom">
            <Image src={addPhotoPng} rounded />
            <Form.Control
              type="file"
              accept="image/gif, image/jpeg, image/png, image/webp"
              multiple
              className="form-upload__input"
              onChange={onUploadImagesHandler}
            />
          </label>
        </Form.Group>
      </Col>
      <Col className="form-upload__thumbnails mt-5">
        {images?.map((image) => (
          <Image key={image} thumbnail src={image} />
        ))}
      </Col>
    </Row>
  );
};

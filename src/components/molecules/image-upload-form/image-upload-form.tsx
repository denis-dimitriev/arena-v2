import './image-upload-form.scss';

import React, { ChangeEvent, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { addPhotoPng, CloseIcon } from '../../../assets';

export const ImageUploadForm = () => {
  const [images, setImages] = useState<string[]>([]);

  const onUploadImagesHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { files } = event.target;
    const arrOfUploadImages: string[] = [];
    if (files) {
      const set = new Set(files);
      set.forEach((value) => {
        arrOfUploadImages.push(URL.createObjectURL(value));
        set.delete(value);
      });
      setImages((prevState) => [...prevState, ...arrOfUploadImages.slice(0, 7)]);
    }
  };

  const onCloseBtnHandler = (target: string) => {
    const index = images.findIndex((img) => img === target);
    const newArrOfImages: string[] = [...images.slice(0, index), ...images.slice(index + 1)];
    setImages(newArrOfImages);
  };

  return (
    <Row className="form-upload">
      <Form.Label className="fw-semibold">
        Загрузить изображения
        <span className="fw-light">&nbsp;[8шт]</span>
      </Form.Label>
      {images?.map((image) => (
        <div className="form-upload__thumbnail" key={image}>
          <Image thumbnail src={image} />
          <span className="form-upload__close-btn" onClick={() => onCloseBtnHandler(image)}>
            <CloseIcon />
          </span>
        </div>
      ))}
      <Col>
        <Form.Group controlId="formFile">
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
    </Row>
  );
};

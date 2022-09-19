import React, { ChangeEvent, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export const ImageUploadForm = () => {
  const [images, setImages] = useState<string[] | null>(null);

  const onUploadImagesHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files: FileList = event.target.files;
      console.log(typeof files);

      /*console.log(URL.createObjectURL(file));*/
    }
  };

  return (
    <Row>
      <Col md={3}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className="fw-semibold">Загрузить изображения</Form.Label>
          <Form.Control
            type="file"
            accept="image/gif, image/jpeg, image/png, image/webp"
            multiple
            onChange={onUploadImagesHandler}
          />
        </Form.Group>
      </Col>
      <Col>
        {images?.map((image) => (
          <Image key={image} width={100} thumbnail src={image} />
        ))}
      </Col>
    </Row>
  );
};

import './image-upload-form.scss';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { addPhotoPng } from '../../../assets';

export const ImageUploadForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [uploadFiles, setUploadFiles] = useState<FileList>();

  const onUploadImagesHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      const files: FileList = event.target.files;
      for (let i = 0; i < files.length; i++) {
        console.log(files[i].name);
      }
      setUploadFiles(files);
    }
  };

  useEffect(() => {
    const arr: string[] = [];
    if (uploadFiles) {
      for (let i = 0; i < uploadFiles.length; i++) {
        arr.push(URL.createObjectURL(uploadFiles[i]));
      }
    }
    setImages((prevState) => {
      return [...prevState, ...arr];
    });
  }, [uploadFiles]);

  return (
    <Row>
      <Col md={3}>
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
      <Col className="form-upload__thumbnails mt-4">
        {images?.map((image) => (
          <Image key={image} thumbnail src={image} />
        ))}
      </Col>
    </Row>
  );
};

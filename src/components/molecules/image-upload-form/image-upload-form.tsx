import React, { ChangeEvent, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

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
      for (let i = 0; i < uploadFiles?.length; i++) {
        arr.push(URL.createObjectURL(uploadFiles[i]));
      }
    }
    setImages((prevState) => {
      return [...prevState, ...arr];
    });
  }, [uploadFiles]);

  console.log(images);

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

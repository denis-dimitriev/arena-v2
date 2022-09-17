import React from 'react';
import { Col, Form } from 'react-bootstrap';

export const UserPersonalData = () => {
  return (
    <Form className="row gap-2">
      <Col md={4}>
        <Form.Group className="m-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" value={'Vasea'} />
        </Form.Group>
        <Form.Group className="m-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Эл. почта</Form.Label>
          <Form.Control type="email" value={'Vasea@mail.ru'} />
        </Form.Group>
        <Form.Group className="m-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Телефон</Form.Label>
          <Form.Control type="tel" value={'+365214566'} />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group className="m-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Город</Form.Label>
          <Form.Control type="text" value={'Chisinau'} />
        </Form.Group>
        <Form.Group className="m-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="m-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Сохранить изменения</Form.Label>
          <Form.Control type="submit" className="btn btn-primary" />
        </Form.Group>
      </Col>
    </Form>
  );
};

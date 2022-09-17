import { Col, Form, Row } from 'react-bootstrap';

export const UserChangePassword = () => {
  return (
    <Form>
      <Col md={4}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Введите старый пароль</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Введите новый пароль</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Повторите новый пароль</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Col>
    </Form>
  );
};

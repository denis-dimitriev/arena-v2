import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';

export const UserGeneralData = () => {
  return (
    <Row className="align-items-center g-3">
      <Col md={4}>
        <h6 className="fw-semibold">Username</h6>
        <Image
          thumbnail
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrErZ_qt6hKCdzDVvgnYBaz9NtQvO_3KHIw&usqp=CAU"
          alt=""
        />
      </Col>
      <Col md={4}>
        <p className="text">Дата регистрации: 02.04.2021</p>
        <p className="text">Объявлений: 10</p>
      </Col>
    </Row>
  );
};

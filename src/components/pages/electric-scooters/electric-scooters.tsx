import { ProductList } from '../../organisms/product-list/product-list';
import { electricScooterAds } from '../../../moco-data/moco-e-scooter-ads';
import { Col, Container, Row } from 'react-bootstrap';
import { TitleTag } from '../../ui/atoms/title-tag/title-tag';
import { ProductFilters } from '../../organisms/product-filters/product-filters';

const ElectricScooters = () => {
  return (
    <Container className="p-0 m-0">
      <TitleTag>Электросамокаты</TitleTag>
      <Row>
        <ProductFilters category={'Электросамокаты'} />
        <Col sm={9}>
          <ProductList products={electricScooterAds} />
        </Col>
      </Row>
    </Container>
  );
};

export default ElectricScooters;

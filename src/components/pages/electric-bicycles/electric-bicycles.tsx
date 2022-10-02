import { ProductList } from '../../organisms/product-list/product-list';
import { electricBicycleAds } from '../../../moco-data/moco-e-bicycles-ads';
import { Col, Container, Row } from 'react-bootstrap';
import { TitleTag } from '../../ui/atoms/title-tag/title-tag';
import { ProductFilters } from '../../organisms/product-filters/product-filters';

const ElectricBicycles = () => {
  return (
    <Container className="p-0 m-0">
      <TitleTag>Электровелосипеды</TitleTag>
      <Row>
        <ProductFilters category={'Электровелосипеды'} />
        <Col sm={9}>
          <ProductList products={electricBicycleAds} />
        </Col>
      </Row>
    </Container>
  );
};

export default ElectricBicycles;

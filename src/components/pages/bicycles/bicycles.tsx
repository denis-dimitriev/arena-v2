import { ProductList } from '../../organisms/product-list/product-list';
import { bicycleAds } from '../../../moco-data/moco-bicycles-ads';
import { Col, Container, Row } from 'react-bootstrap';
import { TitleTag } from '../../ui/atoms/title-tag/title-tag';
import { ProductFilters } from '../../organisms/product-filters/product-filters';

const Bicycles = () => {
  return (
    <Container className="p-0 m-0">
      <TitleTag>Велосипеды</TitleTag>
      <Row>
        <ProductFilters category={'Велосипеды'} />
        <Col sm={9}>
          <ProductList products={bicycleAds} />
        </Col>
      </Row>
    </Container>
  );
};

export default Bicycles;

import { ProductList } from '../../organisms/product-list/product-list';
import { accessoriesAds } from '../../../moco-data/moco-accessories-ads';
import { Col, Container, Row } from 'react-bootstrap';
import { TitleTag } from '../../ui/atoms/title-tag/title-tag';
import { ProductFilters } from '../../organisms/product-filters/product-filters';

const PartsAndAccessories = () => {
  return (
    <Container className="p-0 m-0">
      <TitleTag>Аксессуары</TitleTag>
      <Row>
        <ProductFilters category={'Аксессуары'} />
        <Col sm={9}>
          <ProductList products={accessoriesAds} />
        </Col>
      </Row>
    </Container>
  );
};

export default PartsAndAccessories;

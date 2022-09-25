import { Col, Row } from 'react-bootstrap';
import { ProductItemImages } from '../../molecules/product-item-images/product-item-images';
import { FavoriteIcon, FavoriteRedIcon } from '../../../assets';
import { useLocation, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  console.log(id);
  console.log(pathname.includes('bicycles'));
  // Todo сделать enum где ключ русские слова по категориям и вытащить из пути категорию и взять нужный элемент

  return (
    <div className="d-flex flex-column mt-5 gap-5">
      <h3 className="fw-bold text-start">
        Title
        <span className="mx-3">
          <FavoriteIcon />
          <FavoriteRedIcon />
        </span>
      </h3>
      <Row>
        <Col sm={9}>
          <ProductItemImages />
        </Col>

        <Col sm={3}>
          <h1>Author info</h1>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;

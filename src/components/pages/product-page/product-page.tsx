import {useLocation} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import {ProductItemImages} from '../../molecules/product-item-images/product-item-images';

const ProductPage = () => {
    const location = useLocation();
    return (
        <div className="d-flex flex-column mt-5 gap-5">
            <h3 className="fw-bold text-start">Title</h3>
            <Row>
                <Col sm={9}>
                    <ProductItemImages/>
                </Col>

                <Col sm={3}>
                    <h1>Author info</h1>
                </Col>
            </Row>
    </div>
  );
};

export default ProductPage;

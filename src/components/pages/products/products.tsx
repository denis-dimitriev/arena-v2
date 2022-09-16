import { Fragment } from "react";
import {CategoryList} from "../../organisms/category-list/category-list";


const Products = () => {
    return (
        <Fragment>
            <h3 className="fw-bold text-center mt-5">Последние объявления</h3>
            <CategoryList />
        </Fragment>
    );
};

export default Products;
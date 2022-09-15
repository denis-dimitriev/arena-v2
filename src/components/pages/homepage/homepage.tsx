import './homepage.scss';

import { MainCategory } from '../../molecules/main-category/main-category';
import { CategoryList } from '../../organisms/category-list/category-list';

const Homepage = () => {
  return (
    <div id="homepage" className="homepage">
      <div className="homepage__container">
        <h3 className="fw-bold text-center">Категории</h3>
        <MainCategory />
        <h3 className="fw-bold text-center mt-5">Последние объявления</h3>
        <CategoryList />
      </div>
    </div>
  );
};

export default Homepage;

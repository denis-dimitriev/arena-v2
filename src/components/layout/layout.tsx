import './layout.scss';

import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/header/header';
import cn from 'classnames';
import { useScrollTranslateElement } from '../../hooks/useScrollTranslateElement';

const Layout = () => {
  const { translate } = useScrollTranslateElement();

  return (
    <div id="layout" className="layout">
      <Header />
      <main className={cn({ up: translate })}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

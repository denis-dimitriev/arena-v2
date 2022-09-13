import './layout.scss';

import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/header/header';

const Layout = () => {
  return (
    <div id="layout" className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

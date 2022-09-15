import './layout.scss';

import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/header/header';
import { Footer } from '../organisms/footer/footer';

const Layout = () => {
  return (
    <div id="layout" className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

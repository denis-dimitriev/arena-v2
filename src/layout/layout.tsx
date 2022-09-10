import './layout.scss';
import { HTMLProps, ReactNode } from 'react';

interface ILayout extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <div className="layout">{children}</div>;
};

export default Layout;

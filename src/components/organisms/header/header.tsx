import './header.scss';

import { useScrollHideElement } from '../../hooks/useScrollHideElement';

export const Header = () => {
  const { hidden } = useScrollHideElement();

  return (
    <header className={`header ${hidden && 'header_hidden'}`}>
      <div className="header__container">
        <h1>Header</h1>
      </div>
    </header>
  );
};

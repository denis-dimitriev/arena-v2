import './header.scss';

import { useScrollTranslateElement } from '../../hooks/useScrollTranslateElement';

export const Header = () => {
  const { translate } = useScrollTranslateElement();

  return (
    <header className={`header ${translate && 'header_hidden'}`}>
      <div className="header__container">
        <h1>Header</h1>
      </div>
    </header>
  );
};

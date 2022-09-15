import './header.scss';

import { useScrollTranslateElement } from '../../../hooks/useScrollTranslateElement';
import { Logo } from '../../ui/atoms/logo/logo';
import { Link } from 'react-router-dom';
import { SearchForm } from '../../molecules/search-form/search-form';
import { FavoriteIcon, WatchedIcon } from '../../../assets';
import { useContext } from 'react';
import { UserContext } from '../../../context/user.context';
import { UserDropdownMenu } from '../../molecules/user-dropdown-menu/user-dropdown-menu';

export const Header = () => {
  const { translate } = useScrollTranslateElement();
  const { currentUser } = useContext(UserContext);


  return (
    <header className={`header ${translate && 'header_hidden'}`}>
      <div className="header__container d-flex align-items-center">
        <div className="col d-flex justify-content-start">
          <Logo />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <SearchForm />
        </div>
        <div className="header__user-box col d-flex justify-content-end align-items-center">
          <Link to="#" className="header__link">
            <WatchedIcon />
          </Link>
          <Link to="#" className="header__link">
            <FavoriteIcon />
          </Link>

          {currentUser.user ? (
            <UserDropdownMenu />
          ) : (
            <Link className="btn btn-outline-secondary btn-close-white" to="authentication">
              Войти
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

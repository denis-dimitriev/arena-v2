import './logo.scss';

import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink className="logo" to="/">
      arena
    </NavLink>
  );
};

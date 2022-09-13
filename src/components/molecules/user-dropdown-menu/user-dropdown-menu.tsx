import './user-dropdown-menu.scss';

import { UserIcon } from '../../../assets';
import { useTrigger } from '../../../hooks/useTrigger';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../../firebase/firebase.auth';

export const UserDropdownMenu = () => {
  const { trigger, onTriggerPushHandler } = useTrigger();

  return (
    <div className="user__dropdown dropstart">
      <button
        type="button"
        className="btn dropdown-toggle p-0"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={onTriggerPushHandler}>
        <UserIcon />
      </button>
      <ul className={cn('dropdown-menu dropdown-menu-dark', { show: trigger })}>
        <li>
          <Link to="#" className="dropdown-item">
            Action
          </Link>
        </li>
        <li>
          <Link to="#" className="dropdown-item">
            Action two
          </Link>
        </li>
        <li>
          <Link to="#" className="dropdown-item">
            Action three
          </Link>
        </li>
        <li>
          <button
            className="btn btn-outline-dark w-100 text-start text-white"
            onClick={signOutUser}>
            Выёти
          </button>
        </li>
      </ul>
    </div>
  );
};
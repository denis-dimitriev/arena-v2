import './user-cabinet.scss';

import UserPanel from '../../organisms/user-panel/user-panel';

const UserCabinet = () => {
  return (
    <div className="user-cabinet">
      <div className="user-cabinet__container">
        <h3 className="fw-bold text-start">Личный кабинет</h3>
        <UserPanel />
      </div>
    </div>
  );
};

export default UserCabinet;

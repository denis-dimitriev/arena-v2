import './user-cabinet.scss';

import AccordionPanel from '../../organisms/accordion-panel/accordion-panel';

const UserCabinet = () => {
  return (
    <div className="user-cabinet">
      <div className="user-cabinet__container">
        <h3 className="fw-bold text-start">Личный кабинет</h3>
        <AccordionPanel />
      </div>
    </div>
  );
};

export default UserCabinet;

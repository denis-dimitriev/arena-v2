import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { UserGeneralData } from '../../molecules/user-general-data/user-general-data';
import { UserPersonalData } from '../../molecules/user-personal-data/user-personal-data';
import { UserChangePassword } from '../../molecules/user-change-password/user-change-password';

const UserPanel = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Общие сведения</strong>
        </Accordion.Header>
        <Accordion.Body>
          <UserGeneralData />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <strong>Личные данные</strong>
        </Accordion.Header>
        <Accordion.Body>
          <UserPersonalData />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <strong>История просмотров</strong>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <strong>Избранное</strong>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <strong>Сменить пароль</strong>
        </Accordion.Header>
        <Accordion.Body>
          <UserChangePassword />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <strong>Удаление аккаунта</strong>
        </Accordion.Header>
        <Accordion.Body>
          <Button variant="danger">
            <strong>Удалить аккаунт</strong>
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default UserPanel;

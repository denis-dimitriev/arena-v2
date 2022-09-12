import './authentication.scss';

import SignInForm from '../../organisms/sign-in-form/sign-in-form';
import SignUpForm from '../../organisms/sign-up-form/sign-up-form';
import { useState, Fragment } from 'react';

const Authentication = () => {
  const [signUp, setSignUo] = useState<boolean>(false);

  const onSignInHandler = () => setSignUo(false);
  const onSignUnHandler = () => setSignUo(true);

  return (
    <div className="auth d-flex flex-column align-items-center justify-content-center">
      {signUp ? (
        <Fragment>
          <SignUpForm />
          <button className="btn m-3" onClick={onSignInHandler}>
            Войти
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <SignInForm />
          <button className="btn m-3" onClick={onSignUnHandler}>
            Зарегистрироваться
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default Authentication;

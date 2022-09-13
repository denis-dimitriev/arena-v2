import './authentication.scss';

import SignInForm from '../../organisms/sign-in-form/sign-in-form';
import SignUpForm from '../../organisms/sign-up-form/sign-up-form';
import { useState, Fragment, useEffect, useContext, useReducer } from 'react';
import { UserContext } from '../../../context/user.context';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../ui/atoms/spinner/spinner';
import { fetchUserReducer, initialFetchUserState } from '../../../reducers/fetch-user.reducer';
import { initialLoginState } from '../../../reducers/login.reducer';

const Authentication = () => {
  const [signUp, setSignUo] = useState<boolean>(false);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSignInHandler = () => setSignUo(false);
  const onSignUpHandler = () => setSignUo(true);

  /*  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser]);*/

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
          <button className="btn m-3" onClick={onSignUpHandler}>
            Зарегистрироваться
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default Authentication;

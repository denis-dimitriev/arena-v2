import { Logo } from '../../ui/atoms/logo/logo';
import { GoogleIcon } from '../../../assets';
import { ChangeEvent, FormEvent, useReducer } from 'react';
import {
  loginReducer,
  initialLoginState,
  LoginActionsTypes
} from '../../../reducers/login.reducer';
import cn from 'classnames';
import { useAlert } from '../../../hooks/useAlert';
import {
  signInUserWithEmailAndPassword,
  signInWithGoogleRedirect
} from '../../../firebase/firebase.auth';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);
  const {
    alert: { error, success },
    setAlert
  } = useAlert();
  const navigate = useNavigate();

  const onInputEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: LoginActionsTypes.ADD_EMAIL,
      payload: event.target.value
    });
    setAlert({ error, success: true });
  };

  const onInputPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: LoginActionsTypes.ADD_PASSWORD,
      payload: event.target.value
    });
  };

  const onInputRememberHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: LoginActionsTypes.ADD_REMEMBER_ME,
      payload: event.target.checked
    });
  };

  const onSignInSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const { email, password } = state;
    event.preventDefault();

    const user = await signInUserWithEmailAndPassword(email, password);
    if (user) {
      navigate('/');
    }
  };

  return (
    <div className="auth__form">
      <form
        className="w-100 d-flex align-items-center flex-column gap-md-2"
        onSubmit={onSignInSubmit}>
        <Logo />
        <h1 className="h3 mb-3">Вход</h1>

        <div className={cn('form-floating w-100', { 'was-validated': success })}>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={onInputEmailHandler}
          />
          <label htmlFor="floatingInput">Эл. почта</label>
        </div>
        <div className="form-floating w-100">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={onInputPasswordHandler}
          />
          <label htmlFor="floatingPassword">Пароль</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" onChange={onInputRememberHandler} />{' '}
            Запомнить меня
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Войти
        </button>
        <p className="m-1">Или</p>
        <button
          className="w-100 btn btn-lg btn-outline-secondary d-flex gap-sm-2 align-items-center justify-content-center"
          type="button"
          onClick={signInWithGoogleRedirect}>
          <GoogleIcon />
          Войти через Google
        </button>
      </form>
    </div>
  );
};

export default SignInForm;

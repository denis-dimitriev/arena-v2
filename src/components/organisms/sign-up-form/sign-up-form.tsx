import { Logo } from '../../ui/atoms/logo/logo';
import { ChangeEvent, FormEvent, useReducer } from 'react';
import {
  SignUpReducer,
  initialSignUpFields,
  SignUpActionsTypes
} from '../../../reducers/sign-up.reducer';
import { useAlert } from '../../../hooks/useAlert';

import cn from 'classnames';
import { createNewUserWithEmailAndPassword } from '../../../firebase/firebase.auth';
import { GoogleProvider } from '../../molecules/google-provider/google-provider';

const SignUpForm = () => {
  const [state, dispatch] = useReducer(SignUpReducer, initialSignUpFields);
  const {
    alert: { error, success },
    setAlert
  } = useAlert();

  const onInputEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignUpActionsTypes.ADD_EMAIL,
      payload: event.target.value
    });
    setAlert({ success: true, error });
  };

  const onInputPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignUpActionsTypes.ADD_PASSWORD,
      payload: event.target.value
    });
  };

  const onInputConfirmPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignUpActionsTypes.ADD_CONFIRM_PASSWORD,
      payload: event.target.value
    });
  };

  const onSignUpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      setAlert({ error: true, success: false });
      alert('Пароли не совпадают');
      return;
    }

    setAlert({ success: true, error: false });
    await createNewUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="auth__form">
      <form
        className="w-100 d-flex align-items-center flex-column gap-md-2"
        onSubmit={onSignUpSubmit}>
        <Logo />
        <h1 className="h3 mb-3">Регистрация</h1>

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
            className={cn('form-control', { 'border-danger': error })}
            id="floatingPassword"
            placeholder="Password"
            onChange={onInputPasswordHandler}
          />
          <label htmlFor="floatingPassword">Пароль</label>
        </div>
        <div className="form-floating w-100">
          <input
            type="password"
            className={cn('form-control', { 'border-danger': error })}
            id="floatingConfirmPassword"
            placeholder="Confirm Password"
            onChange={onInputConfirmPasswordHandler}
          />
          <label htmlFor="floatingConfirmPassword">Подтвердите пароль</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Войти
        </button>
        <p className="m-1">Или</p>
        <GoogleProvider />
      </form>
    </div>
  );
};

export default SignUpForm;

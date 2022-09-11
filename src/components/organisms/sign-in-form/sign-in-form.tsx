import './sign-in-form.scss';

import { Logo } from '../../ui/atoms/logo/logo';
import { GoogleIcon } from '../../../assets';

const SignInForm = () => {
  return (
    <div className="sign-in">
      <form className="w-100 d-flex align-items-center flex-column gap-md-2">
        <Logo />
        <h1 className="h3 mb-3">Вход</h1>

        <div className="form-floating w-100">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating w-100">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Войти
        </button>
        <button
          className="w-100 btn btn-lg btn-outline-secondary d-flex gap-sm-2 align-items-center justify-content-center"
          type="submit">
          <GoogleIcon />
          Войти серез Google
        </button>
      </form>
    </div>
  );
};

export default SignInForm;

import { Logo } from '../../ui/atoms/logo/logo';
import { GoogleIcon } from '../../../assets';

const SignUpForm = () => {
  return (
    <div className="auth__form">
      <form className="w-100 d-flex align-items-center flex-column gap-md-2">
        <Logo />
        <h1 className="h3 mb-3">Регистрация</h1>

        <div className="form-floating w-100">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Эл. почта</label>
        </div>
        <div className="form-floating w-100">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Пароль</label>
        </div>
        <div className="form-floating w-100">
          <input
            type="password"
            className="form-control"
            id="floatingConfirmPassword"
            placeholder="Confirm Password"
          />
          <label htmlFor="floatingConfirmPassword">Подтвердите пароль</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Войти
        </button>
        <p className="m-1">Или</p>
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

export default SignUpForm;

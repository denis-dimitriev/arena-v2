import './authentication.scss';
import SignInForm from '../../organisms/sign-in-form/sign-in-form';

const Authentication = () => {
  return (
    <div className="auth d-flex flex-column align-items-center justify-content-center">
      <SignInForm />
      <p className="mt-4 mb-1 ">Зарегистрироваться</p>
    </div>
  );
};

export default Authentication;

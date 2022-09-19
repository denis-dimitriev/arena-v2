import { Logo } from '../../ui/atoms/logo/logo';
import { ChangeEvent, FormEvent, useContext, useReducer } from 'react';
import {
  SignUpReducer,
  initialSignUpFields,
  SignUpActionsTypes
} from '../../../reducers/sign-up.reducer';
import { createNewUserWithEmailAndPassword } from '../../../firebase/firebase.auth';
import { GoogleProvider } from '../../features/google-provider/google-provider';
import {
  FetchUserActionTypes,
  fetchUserReducer,
  initialFetchUserState
} from '../../../reducers/fetch-user.reducer';
import { UserContext } from '../../../context/user.context';

const SignUpForm = () => {
  const [creatingUser, dispatch] = useReducer(SignUpReducer, initialSignUpFields);
  const [fetchedUser, fetchUserDispatch] = useReducer(fetchUserReducer, initialFetchUserState);

  const onInputEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignUpActionsTypes.ADD_EMAIL,
      payload: event.target.value
    });
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

    const { email, password, confirmPassword } = creatingUser;

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    fetchUserDispatch({
      type: FetchUserActionTypes.FETCH_USER_LOADING
    });

    await createNewUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        fetchUserDispatch({
          type: FetchUserActionTypes.FETCH_USER_SUCCESS,
          payload: userCredential.user
        });
      })
      .catch((error) => {
        fetchUserDispatch({
          type: FetchUserActionTypes.FETCH_USER_ERROR,
          payload: error.message.toString()
        });
      });
  };

  return (
    <div className="auth__form">
      <form
        className="w-100 d-flex align-items-center flex-column gap-md-2"
        onSubmit={onSignUpSubmit}>
        <Logo />
        <h1 className="h3 mb-3">Регистрация</h1>

        <div className="form-floating w-100">
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
        <div className="form-floating w-100">
          <input
            type="password"
            className="form-control"
            id="floatingConfirmPassword"
            placeholder="Confirm Password"
            onChange={onInputConfirmPasswordHandler}
          />
          <label htmlFor="floatingConfirmPassword">Подтвердите пароль</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary rounded-0" type="submit">
          Зарегистрироваться
        </button>
        <p className="m-1">Или</p>
        <GoogleProvider />
      </form>
    </div>
  );
};

export default SignUpForm;

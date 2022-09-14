import { Logo } from '../../ui/atoms/logo/logo';
import { GoogleIcon } from '../../../assets';
import { ChangeEvent, FormEvent, useContext, useEffect, useReducer } from 'react';
import {
  loginReducer,
  initialLoginState,
  LoginActionsTypes
} from '../../../reducers/login.reducer';
import {
  signInUserWithEmailAndPassword, signInWithGooglePopUp,
  signInWithGoogleRedirect
} from '../../../firebase/firebase.auth';
import {
  fetchUserReducer,
  initialFetchUserState,
  FetchUserActionTypes
} from '../../../reducers/fetch-user.reducer';
import { UserContext } from '../../../context/user.context';
import {signInWithPopup} from "firebase/auth";

const SignInForm = () => {
  const [login, loginDispatch] = useReducer(loginReducer, initialLoginState);
  const [fetchedUser, fetchUserDispatch] = useReducer(fetchUserReducer, initialFetchUserState);
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setCurrentUser(fetchedUser);
  }, [fetchedUser]);

  const onInputEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    loginDispatch({
      type: LoginActionsTypes.ADD_EMAIL,
      payload: event.target.value
    });
  };

  const onInputPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    loginDispatch({
      type: LoginActionsTypes.ADD_PASSWORD,
      payload: event.target.value
    });
  };

  const onInputRememberHandler = (event: ChangeEvent<HTMLInputElement>) => {
    loginDispatch({
      type: LoginActionsTypes.ADD_REMEMBER_ME,
      payload: event.target.checked
    });
  };

  const onSignInSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const { email, password } = login;
    event.preventDefault();

    fetchUserDispatch({
      type: FetchUserActionTypes.FETCH_USER_LOADING
    });

    await signInUserWithEmailAndPassword(email, password)
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

  const onGoogleSignInHandler = async () => {
    fetchUserDispatch({
      type: FetchUserActionTypes.FETCH_USER_LOADING
    })

    await signInWithGooglePopUp()
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
  }

  return (
    <div className="auth__form">
      <form
        className="w-100 d-flex align-items-center flex-column gap-md-2"
        onSubmit={onSignInSubmit}>
        <Logo />
        <h1 className="h3 mb-3">Вход</h1>

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
          onClick={onGoogleSignInHandler}>
          <GoogleIcon />
          Войти через Google
        </button>
      </form>
    </div>
  );
};

export default SignInForm;

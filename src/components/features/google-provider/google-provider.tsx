import { GoogleIcon } from '../../../assets';
import {
  FetchUserActionTypes,
  fetchUserReducer,
  initialFetchUserState
} from '../../../reducers/fetch-user.reducer';
import { signInWithGooglePopUp } from '../../../firebase/firebase.auth';
import { useContext, useEffect, useReducer } from 'react';
import { UserContext } from '../../../context/user.context';

export const GoogleProvider = () => {
  const [fetchedUser, fetchUserDispatch] = useReducer(fetchUserReducer, initialFetchUserState);

  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => setCurrentUser(fetchedUser), [fetchedUser]);

  const onGoogleSignInHandler = async () => {
    fetchUserDispatch({
      type: FetchUserActionTypes.FETCH_USER_LOADING
    });

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
  };

  return (
    <div className="w-100">
      <button
        className="w-100 btn btn-lg btn-secondary rounded-0 d-flex gap-sm-2 align-items-center justify-content-center"
        type="button"
        onClick={onGoogleSignInHandler}>
        <GoogleIcon />
        Войти через Google
      </button>
    </div>
  );
};

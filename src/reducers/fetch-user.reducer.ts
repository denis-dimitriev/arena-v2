import { IUserFetch } from '../types/user';

export enum FetchUserActionTypes {
  FETCH_USER_LOADING = 'FETCH_USER_LOADING',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

interface fetchUserLoadingAction {
  type: FetchUserActionTypes.FETCH_USER_LOADING;
}

interface fetchUserSuccessAction {
  type: FetchUserActionTypes.FETCH_USER_SUCCESS;
  payload: {};
}

interface fetchUserErrorAction {
  type: FetchUserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

type fetchUserActionType = fetchUserLoadingAction | fetchUserSuccessAction | fetchUserErrorAction;

export const initialFetchUserState: IUserFetch = {
  user: null,
  loading: false,
  error: null
};

export const fetchUserReducer = (state: IUserFetch, action: fetchUserActionType): IUserFetch => {
  switch (action.type) {
    case FetchUserActionTypes.FETCH_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case FetchUserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case FetchUserActionTypes.FETCH_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

interface LoginFields {
  email: string;
  password: string;
  remember: boolean;
}

export enum LoginActionsTypes {
  ADD_EMAIL = 'ADD_EMAIL',
  ADD_PASSWORD = 'ADD_PASSWORD',
  ADD_REMEMBER_ME = 'ADD_REMEMBER_ME'
}

interface addEmailAction {
  type: LoginActionsTypes.ADD_EMAIL;
  payload: string;
}

interface addPasswordAction {
  type: LoginActionsTypes.ADD_PASSWORD;
  payload: string;
}

interface addRememberMeAction {
  type: LoginActionsTypes.ADD_REMEMBER_ME;
  payload: boolean;
}

type LoginAction = addEmailAction | addPasswordAction | addRememberMeAction;

export const initialLoginState: LoginFields = {
  email: '',
  password: '',
  remember: false
};

export const loginReducer = (state: LoginFields, action: LoginAction): LoginFields => {
  switch (action.type) {
    case LoginActionsTypes.ADD_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case LoginActionsTypes.ADD_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case LoginActionsTypes.ADD_REMEMBER_ME:
      return {
        ...state,
        remember: action.payload
      };
    default:
      return state;
  }
};

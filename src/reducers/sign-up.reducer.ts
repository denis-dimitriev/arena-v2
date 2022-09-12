interface SignUpFields {
  email: string;
  password: string;
  confirmPassword: string;
}

export enum SignUpActionsTypes {
  ADD_EMAIL = 'ADD_EMAIL',
  ADD_PASSWORD = 'ADD_PASSWORD',
  ADD_CONFIRM_PASSWORD = 'ADD_CONFIRM_PASSWORD'
}

interface SignUpAction {
  type: string;
  payload: string;
}

export const initialSignUpFields = {
  email: '',
  password: '',
  confirmPassword: ''
};

export const SignUpReducer = (state: SignUpFields, action: SignUpAction): SignUpFields => {
  switch (action.type) {
    case SignUpActionsTypes.ADD_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case SignUpActionsTypes.ADD_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case SignUpActionsTypes.ADD_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload
      };
    default:
      return state;
  }
};

import { createContext, Dispatch, ReactNode, useState } from 'react';
import { IUserType } from '../types/user.type';

interface IUserContext {
  currentUser: {
    user: null | {};
    loading: boolean;
    error: null | string;
  };
  setCurrentUser: Dispatch<IUserContext>;
}

const initValue: IUserContext = {
  currentUser: {
    user: null,
    loading: false,
    error: null
  },
  setCurrentUser: () => null
};

export const UserContext = createContext<IUserContext>(initValue);

interface IUserProvider {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [currentUser, setCurrentUser] = useState();

  const value = {
    currentUser,
    setCurrentUser
  };

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};

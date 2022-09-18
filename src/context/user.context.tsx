import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';
import { IUserFetch, IUserType } from '../types/user';
import { onAuthStateChanged } from 'firebase/auth';
import { arenaAuth } from '../firebase/firebase.auth';

interface IUserContext {
  currentUser: IUserFetch;
  setCurrentUser: Dispatch<IUserFetch>;
}

const initCtxState: IUserFetch = {
  user: null,
  loading: false,
  error: null
};

const initCtxValue: IUserContext = {
  currentUser: initCtxState,
  setCurrentUser: () => {}
};

export const UserContext = createContext<IUserContext>(initCtxValue);

interface IUserProvider {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [currentUser, setCurrentUser] = useState<IUserFetch>(initCtxState);

  useEffect(() => {
    onAuthStateChanged(arenaAuth, (user: IUserType) => {
      setCurrentUser((state) => {
        return {
          ...state,
          user
        };
      });
    });
  }, []);

  const value: IUserContext = {
    currentUser,
    setCurrentUser
  };

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};

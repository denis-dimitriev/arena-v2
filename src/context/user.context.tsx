import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.auth';

interface IUserContext {
  currentUser: {} | null;
  setCurrentUser: Dispatch<SetStateAction<unknown>>;
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  setCurrentUser: () => {
    // nu ma zaibi
  }
});

interface IUserProvider {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user: any) => setCurrentUser(user));
    return subscribe;
  }, [currentUser, setCurrentUser]);

  const value = {
    currentUser,
    setCurrentUser
  };

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};

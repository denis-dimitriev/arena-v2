import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface IUserContext {
  currentUser: Record<string, never> | null;
  setCurrentUser: Dispatch<SetStateAction<any>>;
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  setCurrentUser: () => null
});

interface IUserProvider {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser,
    setCurrentUser
  };

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};

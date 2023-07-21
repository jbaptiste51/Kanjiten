import { createContext, useState } from "react";

const CurrentUserContext = createContext();

export default CurrentUserContext;

// eslint-disable-next-line react/prop-types
export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

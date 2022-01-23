import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <AppContext.Provider
      value={{
        searchResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

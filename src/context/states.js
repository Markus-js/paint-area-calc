import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);

  const SPACEID = process.env.REACT_APP_SPACEID;
  const ACCESSTOKEN = process.env.REACT_APP_ACCESSTOKEN;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://cdn.contentful.com/spaces/${SPACEID}/environments/master/entries?access_token=${ACCESSTOKEN}`
      );
      const resJson = await response.json();
      setItems(resJson.items);
    };
    fetchApi();
  }, []);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

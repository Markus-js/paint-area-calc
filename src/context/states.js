import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [højde, setHøjde] = useState(null);
  const [længde, setLængde] = useState(null);
  const [result, setResult] = useState(null);

  // environment data
  const SPACEID = process.env.REACT_APP_SPACEID;
  const ACCESSTOKEN = process.env.REACT_APP_ACCESSTOKEN;
  //  Fecth products to state => items
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
        højde,
        setHøjde,
        længde,
        setLængde,
        result,
        setResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

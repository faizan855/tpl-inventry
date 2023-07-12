import React, { createContext, useState, useContext } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [sendId, setSendId] = useState(null);

  return (
    <MyContext.Provider value={{ sendId, setSendId }}>
      {children}
    </MyContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(MyContext);
};

export default MyProvider;

export { MyContext, useGlobalContext };

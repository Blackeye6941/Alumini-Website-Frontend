import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext();

export const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);


useEffect(() => {
  const storedData = localStorage.getItem('data');
  if(storedData) {
    setData(JSON.parse(storedData));
  }
}, []);

return (
    <userContext.Provider value ={{data, setData}}>
        {children}
    </userContext.Provider>
);
};

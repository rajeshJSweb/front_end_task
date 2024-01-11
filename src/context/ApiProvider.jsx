import React, { createContext, useEffect, useState } from 'react';

const ApiContext = createContext();

/*eslint-disable*/
const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const contextValue = {
    data,

  };
  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  const context = React.useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export default ApiProvider;
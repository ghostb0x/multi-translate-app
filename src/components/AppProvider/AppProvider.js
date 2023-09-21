import React from "react";

export const AppContext = React.createContext();


function AppProvider( {children} ) {

  const [queryText, setQueryText] = React.useState('');


  const providerValues = {
    queryText,
    setQueryText
  }

  return (
    <AppContext.Provider value={providerValues}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

import React from "react";

export const AppContext = React.createContext();


function AppProvider( {children} ) {

  const [queryText, setQueryText] = React.useState('');
  
  
  const [outputs, setOutputs] = React.useState([]);


  function addOutput() {
    const key = crypto.randomUUID();

    const newOutput = {
      key: key
    }
    
    let currentOutputs = [...outputs];
    currentOutputs.push(newOutput)
    console.log(currentOutputs)
    setOutputs(currentOutputs);
  }


  const providerValues = {
    queryText,
    setQueryText,
    outputs,
    addOutput
  };

  return (
    <AppContext.Provider value={providerValues}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

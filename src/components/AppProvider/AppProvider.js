import React from "react";

export const AppContext = React.createContext();


function AppProvider( {children} ) {

  const [queryText, setQueryText] = React.useState('');
  
  const newOutput = {
    id: React.useId(),
    language: "Select Language",
    content: "New Translation"
  }
  
  const [outputs, setOutputs] = React.useState([newOutput]);


  function addOutput() {
    let currentOutputs = [...outputs];
    currentOutputs.push(newOutput)
    console.log("currentOutputs")
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

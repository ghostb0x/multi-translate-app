import React from 'react';
import { QueryRefContext } from '../QueryInput/useQueryRef';

export const AppContext = React.createContext();

function AppProvider({ children }) {

  const { queryText, setQueryText, queryLang, setQueryLang } =
  React.useContext(QueryRefContext);

  // testing 
  console.log(queryLang)
  console.log(queryText.current?.value)

  const [outputs, setOutputs] = React.useState([
    { id: '1', language: '', text: '' },
  ]);
  const [saved, setSaved] = React.useState([]);

  function loadSave(savedQuery, savedOutputs) {
    setOutputs(savedOutputs);
    setQueryText(savedQuery.text);
    setQueryLang(savedQuery.language);
  }

  // saved searches functionality:

  // (v2) Upon first using "add to saved search"
  //    - display warning alert that items saved in storage are not secure from hackers
  //    - so no sensitive password data should ever be inputted and saved
  //    - add acknowledgement before allowing

  // store saved queries in local storage when "save" button is clicked
  function saveCurrentSearch() {

    // spread operator does not make a deep copy, which causes changes to outputs array
    // to propogate to the saved state in local storage
    let deepCopyOutputs = structuredClone(outputs);

    // if any output in deepCopyOutputs has id="1", update to cryptoRandom
    const outputIndex = deepCopyOutputs.findIndex(
      (output) => output.id === "1"
    );

    if (outputIndex !== -1) {
      deepCopyOutputs[outputIndex]["id"] = crypto.randomUUID();
    }
    
    const currentSearch = {
      id: crypto.randomUUID(),
      query: {
        language: queryLang,
        text: queryText.current?.value,
      },
      outputs: deepCopyOutputs,
    };

    const newSaves = [...saved];
    newSaves.push(currentSearch);
    const stringifiedSaves = JSON.stringify(newSaves);
    window.localStorage.setItem('saved-searches', stringifiedSaves);
    setSaved(newSaves);
  }

  const providerValues = {
    outputs,
    setOutputs,
    saveCurrentSearch,
    saved,
    setSaved,
    loadSave,
  };

  return (
    <AppContext.Provider value={providerValues}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

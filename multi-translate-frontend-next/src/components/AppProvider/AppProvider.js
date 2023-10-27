import React from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [queryText, setQueryText] = React.useState('');
  const [queryLang, setQueryLang] = React.useState('');
  const [outputs, setOutputs] = React.useState([{id: crypto.randomUUID()}]);

  const [fetchTranslate, setFetchTranslate] = React.useState(1);

  async function getTranslation(input_lang, output_lang) {
    const options = {
      method: 'GET',
      url: 'https://multi-translate-app-api-backend-production.up.railway.app/translation',
      params: {
        q: queryText,
        source: input_lang,
        target: output_lang,
        format: 'text',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  // saved searches functionality:

  // (v1) on click of "Add to Saved Searches" button
  //    - bundle current queryText and current outputs into single js object
  //    - push to "saved searches" object
  //    - push updated "saved searches" obj storage
  // (v1) on click of saved item in "Saved Searches" panel
  //    - retrieve from local storage and populate queryInput and outputs with values
  // (v1) on click of X button of saved item from "Saved Searches" panel,
  //    - remove item from local storage
  //    - remove item from saved searches
  // (v2) Upon first using "add to saved search"
  //    - display warning alert that items saved in storage are not secure from hackers
  //    - so no sensitive password data should ever be inputted and saved
  //    - add acknowledgement before allowing

  // store saved queries in local storage when "save" button is clicked
  function saveCurrentSearch() {
    // spread operator does not make a deep copy, which causes changes to outputs array
    // to propogate to the saved state
    let deepCopyOutputs = structuredClone(outputs);
    const currentSearch = {
      id: crypto.randomUUID(),
      query: {
        language: queryLang,
        text: queryText,
      },
      outputs: deepCopyOutputs,
    };

    const newSaves = [...saved];
    newSaves.push(currentSearch);
    const stringifiedSaves = JSON.stringify(newSaves);
    window.localStorage.setItem('saved-searches', stringifiedSaves);
    setSaved(newSaves);
  }

  const [saved, setSaved] = React.useState([]);

  const providerValues = {
    queryText,
    setQueryText,
    queryLang,
    setQueryLang,
    fetchTranslate,
    setFetchTranslate,
    outputs,
    setOutputs,
    getTranslation,
    saveCurrentSearch,
    saved,
    setSaved,
  };

  return (
    <AppContext.Provider value={providerValues}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

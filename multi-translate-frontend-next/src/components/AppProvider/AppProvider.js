import React from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [queryText, setQueryText] = React.useState('');
  const [queryLang, setQueryLang] = React.useState('');
  const [outputs, setOutputs] = React.useState([
    { id: '1', language: '', text: '' },
  ]);
  const [saved, setSaved] = React.useState([]);

  const [triggerFetch, setTriggerFetch] = React.useState(0);

  function loadSave(savedQuery, savedOutputs) {
    setOutputs(savedOutputs);
    setQueryText(savedQuery.text);
    setQueryLang(savedQuery.language);
  }

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

  // (v2) Upon first using "add to saved search"
  //    - display warning alert that items saved in storage are not secure from hackers
  //    - so no sensitive password data should ever be inputted and saved
  //    - add acknowledgement before allowing

  // store saved queries in local storage when "save" button is clicked
  function saveCurrentSearch() {
    // if any output in deepCopyOutputs has id="1", update to cryptoRandom
    const outputIndex = outputs.findIndex(
      (output) => output.id === "1"
    );

    if (outputIndex !== -1) {
      outputs[outputIndex]["id"] = crypto.randomUUID();
    }
    
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

  const providerValues = {
    queryText,
    setQueryText,
    queryLang,
    setQueryLang,
    triggerFetch,
    setTriggerFetch,
    outputs,
    setOutputs,
    getTranslation,
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

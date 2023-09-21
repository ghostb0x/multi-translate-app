import React from 'react';
import { translate } from '@vitalets/google-translate-api';


export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [queryText, setQueryText] = React.useState('');

  const [outputs, setOutputs] = React.useState([]);

  const [fetchTranslate, setFetchTranslate] = React.useState(0);


  // seems this api call isn't working - need to tinker or just try real api 
  async function getTranslation(text, language) {
    try {

      const { translatedText } = await translate(text, { to: language });
      console.log(translatedText);
      return(translatedText);
    }
    catch (e) {
      console.log(e)
      // if (e.name === 'TooManyRequestsError') {
        // retry with another proxy agent
      // }
    }
  }

  function addOutput() {
    const key = crypto.randomUUID();

    const newOutput = {
      key: key,
    };

    let currentOutputs = [...outputs];
    currentOutputs.push(newOutput);
    console.log(currentOutputs);
    setOutputs(currentOutputs);
  }

  const providerValues = {
    queryText,
    setQueryText,
    outputs,
    addOutput,
    fetchTranslate,
    setFetchTranslate,
    getTranslation,
  };

  return (
    <AppContext.Provider value={providerValues}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

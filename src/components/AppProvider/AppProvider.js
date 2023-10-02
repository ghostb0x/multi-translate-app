import React from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [queryText, setQueryText] = React.useState('');

  const [fetchTranslate, setFetchTranslate] = React.useState(0);

  async function getTranslation(input_lang, output_lang) {
    const options = {
      method: 'POST',
      url: 'https://google-translator9.p.rapidapi.com/v2',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key':
          `${RapidAPIKey}`,
        'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com',
      },
      data: {
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

  const providerValues = {
    queryText,
    setQueryText,
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

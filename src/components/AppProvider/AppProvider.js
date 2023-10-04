import React from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [queryText, setQueryText] = React.useState('');

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


  const [fetchTranslate, setFetchTranslate] = React.useState(0);

  async function getTranslation(input_lang, output_lang) {
    
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/translation',
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

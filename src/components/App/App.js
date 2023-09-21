import React from 'react';
import QueryInput from '../QueryInput/QueryInput';
import AppProvider from '../AppProvider/AppProvider';

function App() {
  return (
    <AppProvider>
        <QueryInput />
    </AppProvider>
  );
}

export default App;

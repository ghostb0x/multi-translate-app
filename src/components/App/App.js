import React from 'react';
import AppProvider from '../AppProvider/AppProvider';
import MainBody from '../MainBody/MainBody';

function App() {
  return (
    <AppProvider>
        <MainBody />
    </AppProvider>
  );
}

export default App;

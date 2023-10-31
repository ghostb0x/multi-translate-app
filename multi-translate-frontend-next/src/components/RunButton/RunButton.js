'use client';
import React from 'react';
import Button from '../Button';
import { AppContext } from '../AppProvider';

function RunButton() {
  const {
    queryText,
    queryLang,
    setTriggerFetch,
  } = React.useContext(AppContext);

  return (
    <Button
      width={'100%'}
      onClick={() => {
        if (queryText && queryLang) {
          setTriggerFetch(Math.random());
        } else {
          console.log(
            'Please ensure you have selected an original text language, and have added some text to translate.'
          );
        }
      }}
    >
      Run Translation
    </Button>
  );
}

export default RunButton;

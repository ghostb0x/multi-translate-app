import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';
import Button from '../Button';
import { QUERIES } from '@/constants';
import { QueryRefContext } from './useQueryRef';

function QueryInput() {
  const { queryText, queryLang, setQueryLang, setTriggerFetch } =
    React.useContext(QueryRefContext);
    //testing 
  console.log(
    `Input Component ${queryText.current?.value} and ${queryLang}`
  );

  return (
    <Wrapper>
      <LanguageSelector
        value={queryLang}
        onChange={(event) => {
          setQueryLang(event.target.value);
        }}
      />
      <InputTextBox
        ref={queryText}
        id="input"
        placeholder="Add your text here..."
      />
      <Button
        onClick={() => {
          if (queryText.current.value && queryLang) {
            console.log("Scenario 1")
            console.log(queryLang)
            setTriggerFetch(Math.random());
          } else if (
            queryText.current.value && !queryLang.current.value
          ) {
            console.log("Scenario 2")
            setQueryLang('en');
            setTriggerFetch(Math.random());
          } else {
            window.alert(
              'Please ensure you have selected an original text language, and have added some text to translate.'
            );
          }
        }}
      >
        Run Translation
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'text select'
      'text button';
  }
`;

const InputTextBox = styled(Textbox)`
  background-color: var(--color-white);
`;

export default QueryInput;

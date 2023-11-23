import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';
import Button from '../Button';
import { QUERIES } from '@/constants';
import { QueryRefContext } from './useQueryRef';

function QueryInput() {
  const { queryText, queryLang, setTriggerFetch } =
    React.useContext(QueryRefContext);
    // 
  console.log(
    `Input Component ${queryText.current?.value} and ${queryLang.current?.value}`
  );

  return (
    <Wrapper>
      <LanguageSelector
        ref={queryLang}
        value={queryLang.current?.value}
        onChange={(event) => {
          queryLang.current.value = event.target.value;
        }}
      />
      <InputTextBox
        ref={queryText}
        id="input"
        placeholder="Add your text here..."
      />
      <Button
        onClick={() => {
          if (queryText.current.value && queryLang.current.value) {
            // 
            console.log('first scenario');
            setTriggerFetch(Math.random());
          } else if (
            queryText.current.value && !queryLang.current.value
          ) {
            queryLang.current.value = 'en';
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

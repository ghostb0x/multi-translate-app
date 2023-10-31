import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';
import Button from '../Button';
import { QUERIES } from '@/constants';

function QueryInput() {
  const {
    queryText,
    setQueryText,
    queryLang,
    setQueryLang,
    setTriggerFetch,
  } = React.useContext(AppContext);

  return (
    <Wrapper>
      <LanguageSelector
        value={queryLang}
        onChange={(event) => {
          setQueryLang(event.target.value);
        }}
      />
      <InputTextBox
        id="input"
        placeholder="Add your text here..."
        value={queryText}
        onChange={(event) => {
          setQueryText(event.target.value);
        }}
      />
      <Button
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

import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import styled from 'styled-components';
import { QUERIES } from '@/constants';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';

function QueryInput() {
  const {
    queryText,
    setQueryText,
    queryLang,
    setQueryLang,
    setFetchTranslate,
  } = React.useContext(AppContext);

  return (
    <Wrapper>
      <Label htmlFor="input">Input your Query</Label>
      <LanguageSelector value={queryLang}
      onChange={(event) => {
        setQueryLang(event.target.value);
      }}/>
      <Textbox
        id="input"
        value={queryText}
        onChange={(event) => {
          setQueryText(event.target.value);
        }}
      />
      <Button
        onClick={() => {
          setFetchTranslate(Math.random());
        }}
      >
        Translate This
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;



const Button = styled.button`
  border: 1px solid black;
  background: orange;
  width: fit-content;
  padding: 5px;
  border-radius: 6px;
`;

export default QueryInput;

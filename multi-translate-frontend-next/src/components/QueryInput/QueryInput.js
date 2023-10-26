import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import styled from 'styled-components';
import { QUERIES } from '@/constants';
import LanguageSelector from '../LanguageSelector';

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
      <Input
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
        Translate This ${queryLang}!
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.textarea`
  width: 100%;
  height: 100px;
  font-family: var(--font-roboto);
  font-size: 24px;

  @media ${QUERIES.tabletAndUp} {
    max-width: 50%;
    margin: 1rem 10%;
  }
`;

const Button = styled.button`
  border: 1px solid black;
  background: orange;
  width: fit-content;
  padding: 5px;
  border-radius: 6px;
`;

export default QueryInput;

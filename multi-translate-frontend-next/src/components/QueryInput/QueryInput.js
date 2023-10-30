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
    setTriggerFetch,
  } = React.useContext(AppContext);

  return (
    <Wrapper>
      <Label htmlFor="input">Select a language and add text to translate</Label>
      <LanguageSelector
        value={queryLang}
        onChange={(event) => {
          setQueryLang(event.target.value);
        }}
      />
      <Textbox
        id="input"
        placeholder="Add your text here..."
        value={queryText}
        onChange={(event) => {
          setQueryText(event.target.value);
        }}
      />

      <ButtonsWrapper>
        <Button
          onClick={() => {
            setTriggerFetch(Math.random());
          }}
        >
          Run Translation
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: var(--font-roboto);
  text-align: center;
  margin-bottom: 10px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  background: ${(props) => props.$color || '#BF4F74'};
  border: none;
  padding: 5px;
  width: 100%;
  height: 50px;
`;

export default QueryInput;

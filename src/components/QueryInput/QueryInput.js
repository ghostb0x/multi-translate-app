import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import styled from 'styled-components';

function QueryInput() {
  const {
    queryText,
    setQueryText,
    fetchTranslate,
    setFetchTranslate,
  } = React.useContext(AppContext);

  return (
    <Wrapper>
      <Label htmlFor="input">Input your Query</Label>
      <Input
        id="input"
        value={queryText}
        onChange={(event) => {
          setQueryText(event.target.value);
        }}
      />
      <Button onClick={(event) => {
        setFetchTranslate(fetchTranslate+1)
      }}>Translate This!</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.textarea`
  width: 300px;
  height: 100px;
`;

const Button = styled.button`
  border: 1px solid black;
  background: orange;
  width: fit-content;
  padding: 5px;
  border-radius: 6px;
`;

export default QueryInput;

import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import styled from 'styled-components';

function QueryInput() {
  const { queryText, setQueryText } = React.useContext(AppContext);

  return (
    <Wrapper>
      <Label htmlFor="input">
        Input your Query
      </Label>
      <Input
        id="input"
        value={queryText}
        onChange={(event) => {
          setQueryText(event.target.value);
        }}
      />
    
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`

`;

const Input = styled.textarea`
  width: 300px;
  height: 100px;
`;

export default QueryInput;

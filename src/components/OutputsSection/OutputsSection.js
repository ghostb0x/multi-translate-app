import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider/AppProvider';


function OutputsSection() {

  const { addOutput, outputs } = React.useContext(AppContext);

  return (
    <SectionWrapper>
      <AddNew onClick={addOutput}>
        Add New Thingy
      </AddNew>
      {outputs.map(
        ({id, language, content}) => (
          <OutputWrapper key={id}>
            <OutputLanguage>{language}</OutputLanguage>
            <OutputText>{content}</OutputText>
          </OutputWrapper>
        )
      )}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;


const AddNew = styled.button`
  border: 1px solid black;
  width: fit-content;
  border-radius: 6px;
  padding: 6px;
  `;

const OutputWrapper = styled.article`
  border: 1px solid black;
  width: 300px;
  padding: 5px;
`;

const OutputLanguage = styled.h2``;

const OutputText = styled.p`
  margin-top: 10px;
`;


export default OutputsSection;

import React from 'react';
import styled from 'styled-components';
import OutputItem from '../OutputItem/OutputItem';

function OutputsSection() {

  const [outputs, setOutputs] = React.useState([]);

  function addOutput() {
    const key = crypto.randomUUID();

    const newOutput = {
      key: key,
    };

    let currentOutputs = [...outputs];
    currentOutputs.push(newOutput);
    setOutputs(currentOutputs);
  }

  return (
    <SectionWrapper>
      <AddNew onClick={addOutput}>Add New Translation</AddNew>
      {outputs.map(({ key, language, content }) => (
        <OutputItem
          key={key}
        />
      ))}
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

export default OutputsSection;

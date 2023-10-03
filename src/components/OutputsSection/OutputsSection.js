import React from 'react';
import styled from 'styled-components';
import OutputItem from '../OutputItem/OutputItem';

function OutputsSection() {
  const [outputs, setOutputs] = React.useState([]);

  function addOutput() {
    setOutputs([
      ...outputs,
      {
        id: crypto.randomUUID(),
      },
    ]);
  }

  function removeOutput(id) {
    setOutputs(outputs.filter((output) => output.id !== id));
  }

  return (
    <SectionWrapper>
      <AddNew onClick={addOutput}>Add New Translation</AddNew>
      <ol>
        {outputs.map((output) => (
          <OutputItem
            key={output.id}
            id={output.id}
            removeOutput={removeOutput}
          />
        ))}
      </ol>
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

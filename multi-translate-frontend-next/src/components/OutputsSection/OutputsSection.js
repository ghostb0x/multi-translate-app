import React from 'react';
import styled from 'styled-components';
import OutputItem from '../OutputItem/OutputItem';
import { AppContext } from '../AppProvider/AppProvider';


function OutputsSection() {

  const {
    outputs,
    setOutputs,
    saveCurrentSearch
  } = React.useContext(AppContext);


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

  // modify updateLanguage and updateContent to use immer?
  function updateLanguage(outputId, language) {
    const outputIndex = outputs.findIndex(
      (output) => output.id === outputId
    );

    const currentOutput = outputs[outputIndex];
    currentOutput['language'] = language;

    const newOutputs = [...outputs];
    newOutputs.splice(outputIndex, 1, currentOutput);

    setOutputs(newOutputs);
  }

  function updateContent(outputId, text) {
    const outputIndex = outputs.findIndex(
      (output) => output.id === outputId
    );

    const currentOutput = outputs[outputIndex];
    currentOutput['text'] = text;

    const newOutputs = [...outputs];
    newOutputs.splice(outputIndex, 1, currentOutput);

    setOutputs(newOutputs);
  }

  console.log(outputs)

  return (
    <SectionWrapper>
      <AddSavedSearch onClick={saveCurrentSearch}>Add to Saved Searches</AddSavedSearch>
      <AddNew onClick={addOutput}>Add New Translation</AddNew>
      <ol>
        {outputs.map((output) => (
          <OutputItem
            key={output.id}
            id={output.id}
            removeOutput={removeOutput}
            updateLanguage={updateLanguage}
            updateContent={updateContent}
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

const AddSavedSearch = styled.button`
  border: 1px solid black;
  width: fit-content;
  border-radius: 6px;
  padding: 6px;
  background-color: cornflowerblue;
`;

const AddNew = styled.button`
  border: 1px solid black;
  width: fit-content;
  border-radius: 6px;
  padding: 6px;
`;

export default OutputsSection;

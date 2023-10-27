import React from 'react';
import styled from 'styled-components';
import OutputItem from '../OutputItem/OutputItem';
import { AppContext } from '../AppProvider/AppProvider';

function OutputsSection() {
  const { outputs, setOutputs } = React.useContext(AppContext);

  React.useEffect(() => {
    addOutput();
  }, []);

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

  // these funcs modify the "outputs" objects, rather than the component UI
  // modify updateLanguage and updateContent to use immer?
  function updateLanguage(outputId, lang_code) {
    const outputIndex = outputs.findIndex(
      (output) => output.id === outputId
    );

    const currentOutput = outputs[outputIndex];

    currentOutput['language'] = lang_code;

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

  // testing
  console.log(outputs);

  return (
    <SectionWrapper>
      <Top>
        <h2>Translations:</h2>
        <p>
          Click &apos;Add New Translation&apos; to translate your
          search into multiple languages
        </p>

        <AddNew onClick={addOutput}>Add New Translation</AddNew>
      </Top>
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
  margin-top: 10px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
`;

const AddNew = styled.button`
  border: none;
  padding: 5px;
  width: 100%;
  height: 50px;
  background-color: darkslateblue;
`;

export default OutputsSection;

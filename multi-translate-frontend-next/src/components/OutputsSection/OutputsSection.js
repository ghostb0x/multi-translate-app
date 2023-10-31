import React from 'react';
import styled from 'styled-components';
import OutputItem from '../OutputItem/OutputItem';
import { AppContext } from '../AppProvider/AppProvider';
import Button from '../Button';
import SectionName from '../SectionName';
import { QUERIES } from '@/constants';

function OutputsSection() {
  const { outputs, setOutputs } = React.useContext(AppContext);

  function addOutput() {
    setOutputs([
      ...outputs,
      {
        id: crypto.randomUUID(),
        language: '',
        text: '',
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


  return (
    <SectionWrapper>
      <Top>
        <SectionName type="h2">Translations</SectionName>
      </Top>
      <TranslationOutputs>
        {outputs.map((output) => (
          <OutputItem
            key={output.id}
            id={output.id}
            language={output.language}
            text={output.text}
            removeOutput={removeOutput}
            updateLanguage={updateLanguage}
            updateContent={updateContent}
          />
        ))}
      </TranslationOutputs>
      <Button
        marginTop={'0px'}
        onClick={addOutput}
      >
        Add New Translation
      </Button>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

const TranslationOutputs = styled.ul`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
  }
`;

export default OutputsSection;

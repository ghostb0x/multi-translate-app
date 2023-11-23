import React from 'react';
import styled from 'styled-components';
import OutputItem from '../OutputItem/OutputItem';
import { AppContext } from '../AppProvider/AppProvider';
import Button from '../Button';
import SectionName from '../SectionName';
import { QUERIES } from '@/constants';

function OutputsSection() {
  const { outputs, setOutputs } = React.useContext(AppContext);

  
  // testing
  console.log(outputs);

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

  // these funcs modify the "outputs" state array values, rather than the component UI
  function updateLanguage(outputId, lang_code) {
    let newOutputs = outputs.map((output) => {
      if (output.id === outputId) {
        output.language = lang_code;
      }
      return output;
    });

    setOutputs(newOutputs);
  }

  function updateContent(outputId, text) {
    let newOutputs = outputs.map((output) => {
      if (output.id === outputId) {
        output.text = text;
      }
      return output;
    });

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

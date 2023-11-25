import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';
import CloseButton from '../CloseButton';
import { useQueryRefContext } from '../QueryInput/useQueryRef';

type IdType = ReturnType<typeof crypto.randomUUID> | string;

export interface OutputItemProps {
  id: IdType;
  language: string;
  text: string;
  removeOutput: (id: IdType) => void;
  updateLanguage: (outputId: IdType, lang_code: string) => void;
  updateContent: (outputId: IdType, text: string) => void;
}

function OutputItem({
  id,
  language,
  text,
  removeOutput,
  updateLanguage,
  updateContent,
}: OutputItemProps) {
  const { triggerFetch, setTriggerFetch, getTranslation } =
    useQueryRefContext();

  const [outputLang, setOutputLang] = React.useState(language);

  const placeholderText: string = `Click 'Run Translation' to see output`;
  const [content, setContent] = React.useState(
    text ? text : placeholderText
  );

  // testing
  console.log(
    `Output Item Rendered - ID: ${id} - Lang: ${
      outputLang ?? 'none'
    } Text: ${content ?? 'none'}`
  );

  //Fetch translation content on Run Translation
  React.useEffect(() => {
    try {
      let output;

      if (triggerFetch && outputLang) {
        output = getTranslation(outputLang);
        output.then((response) => {
          const translation =
            response.data.translations[0].translatedText;
          updateContent(id, translation);
          setContent(translation);
          setTriggerFetch(0);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [triggerFetch]);

  return (
    <OutputWrapper>
      <Top>
        <LanguageSelector
          value={outputLang}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            updateLanguage(id, event.target.value);
            setOutputLang(event.target.value);
          }}
        />
        <CloseButton
          onClick={() => {
            removeOutput(id);
          }}
        />
      </Top>
      <Textbox
        id={`outputId:${id}`}
        readOnly
        value={content}
      />
    </OutputWrapper>
  );
}

const OutputWrapper = styled.li`
  position: relative;
  margin-bottom: 10px;
  border: none;
  padding: 5px 0;

  display: flex;
  flex-direction: column;
  background: var(--color-gray-300);
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default React.memo(OutputItem);

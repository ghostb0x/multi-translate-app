import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider/AppProvider';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';
import CloseButton from '../CloseButton';

function OutputItem({
  id,
  language,
  text,
  removeOutput,
  updateLanguage,
  updateContent,
}) {
  const { queryLang, triggerFetch, setTriggerFetch, getTranslation } =
    React.useContext(AppContext);

  const [outputLang, setOutputLang] = React.useState(language);

  const placeholderText = `Click 'Run Translation' to see output`;
  const [content, setContent] = React.useState(
    text ? text : placeholderText
  );

  //Fetch translation content on Run Translation
  React.useEffect(() => {
    try {
      let output;

      if (triggerFetch && outputLang) {
        output = getTranslation(queryLang, outputLang);
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

  const item = (
    <OutputWrapper>
      <Top>
        <LanguageSelector
          value={outputLang}
          onChange={(event) => {
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

  return item;
}

const OutputWrapper = styled.li`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: none;
  background: var(--color-gray-300);
  padding: 5px 0;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
`;

export default React.memo(OutputItem);

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

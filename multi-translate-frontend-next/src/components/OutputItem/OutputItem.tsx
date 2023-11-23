import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';
import CloseButton from '../CloseButton';
import { QueryRefContext } from '../QueryInput/useQueryRef';

function OutputItem({
  id,
  language,
  text,
  removeOutput,
  updateLanguage,
  updateContent,
}) {
  const { triggerFetch, setTriggerFetch, getTranslation } = React.useContext(QueryRefContext);
  
  const [outputLang, setOutputLang] = React.useState(language);

  const placeholderText: string = `Click 'Run Translation' to see output`;
  const [content, setContent] = React.useState(
    text ? text : placeholderText
  );

  console.log("Item Rerendered")

  //Fetch translation content on Run Translation
  React.useEffect(() => {
    let subscribed = true;
    try {
      let output;

      if (triggerFetch && outputLang) {
        output = getTranslation(outputLang);
        output.then((response) => {
          if (subscribed) {

            const translation =
            response.data.translations[0].translatedText;
            updateContent(id, translation);
            setContent(translation);
            setTriggerFetch(0);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }

    return () => {
      subscribed = false;
    }
  }, [triggerFetch]);

  return (
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

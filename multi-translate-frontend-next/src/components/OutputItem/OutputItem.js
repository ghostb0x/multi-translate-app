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

  const [content, setContent] = React.useState(
    text ? text : `Click 'Run Translation' to see output`
  );
  
  // need a trigger that is independent of Lang and Content
  // new property -
  //Fetch translation content on Run Translation
  React.useEffect(() => {
    try {
      console.log('Use Effect ran');
      let output;
      if (triggerFetch) {
        console.log('API CALL RANNNNNNN!!!!');
        console.log(outputLang);
        output = getTranslation(queryLang, outputLang);
        output.then((response) => {
          const translation =
            response.data.translations[0].translatedText;
          updateContent(id, translation);
          setContent(translation);
          setTriggerFetch(0)
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
`;

const Top = styled.div`
  display: flex;
  width: 100%;
`;

export default React.memo(OutputItem);

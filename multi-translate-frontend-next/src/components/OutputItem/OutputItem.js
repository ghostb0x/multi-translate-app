import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider/AppProvider';
import { X } from 'react-feather';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';

function OutputItem({
  id,
  removeOutput,
  updateLanguage,
  updateContent,
}) {
  const { queryLang, fetchTranslate, getTranslation } =
    React.useContext(AppContext);

  const [outputLang, setOutputLang] = React.useState('');

  const [content, setContent] = React.useState(
    `Click 'Run Translation' to see output`
  );

  React.useEffect(() => {
    try {
      let output;
      if (outputLang !== '') {
        output = getTranslation(queryLang, outputLang);
      }
      output.then((response) => {
        const translation =
          response.data.translations[0].translatedText;
        updateContent(id, translation);
        setContent(
          fetchTranslate === 0
            ? `Click 'Run Translation' to see output`
            : `${translation}`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }, [fetchTranslate]);

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
        >
          <CloseIcon />
        </CloseButton>
      </Top>
      <Textbox
        id={`outputId:${id}`}
        readOnly={true}
        value={
          content === null
            ? `Select Language and input message`
            : content
        }
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

const CloseButton = styled.button`
  /* position: absolute;
  top: 0;
  right: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: none;
`;
const CloseIcon = styled(X)``;

export default React.memo(OutputItem);

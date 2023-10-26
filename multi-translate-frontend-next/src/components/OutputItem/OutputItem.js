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
    'Run Translate to see output'
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
            ? 'Run Translate to see output'
            : `${translation}`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }, [fetchTranslate]);

  const item = (
    <OutputWrapper>
      <CloseButton
        onClick={() => {
          removeOutput(id);
        }}
      >
        <CloseIcon />
      </CloseButton>
      <LanguageSelector
        value={outputLang}
        onChange={(event) => {
          updateLanguage(id, event.target.value);
          setOutputLang(event.target.value);
        }}
      />
      <Textbox
        id={`outputId:${id}`}
        readOnly={true}
        value={
          content === null
            ? 'Select Language and input message'
            : content
        }
      />
    </OutputWrapper>
  );

  return item;
}

const OutputWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  /* width: 300px; */
  padding: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
`;
const CloseIcon = styled(X)``;

const OutputLanguage = styled.select``;

const OutputText = styled.p`
  margin-top: 10px;
`;

export default React.memo(OutputItem);

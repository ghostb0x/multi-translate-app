import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider/AppProvider';
import { Cross2Icon } from '@radix-ui/react-icons';

function OutputItem({
  id,
  removeOutput,
  updateLanguage,
  updateContent,
}) {
  const { fetchTranslate, getTranslation } =
    React.useContext(AppContext);

  const [language, setLanguage] = React.useState('');

  const [content, setContent] = React.useState(
    'Run Translate to see output'
  );

  React.useEffect(() => {
    try {
      let output;
      if (language !== '') {
        output = getTranslation('en', language);
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

  const languageSelect = (
    <OutputLanguage
      value={language}
      onChange={(event) => {
        updateLanguage(id, event.target.value);
        setLanguage(event.target.value);
      }}
    >
      <option value={''}>--Select Language--</option>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="pt">Portuguese</option>
      <option value="de">German</option>
      <option value="fr">French</option>
    </OutputLanguage>
  );

  const item = (
    <OutputWrapper>
      <CloseButton
        onClick={() => {
          removeOutput(id);
        }}
      >
        <CloseIcon />
      </CloseButton>
      {languageSelect}
      <OutputText>
        {content === null
          ? 'Select Language and input message'
          : content}
      </OutputText>
    </OutputWrapper>
  );

  return item;
}

const OutputWrapper = styled.li`
  position: relative;
  border: 1px solid black;
  width: 300px;
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
const CloseIcon = styled(Cross2Icon)``;

const OutputLanguage = styled.select``;

const OutputText = styled.p`
  margin-top: 10px;
`;

export default React.memo(OutputItem);

import React from 'react';
import styled from 'styled-components';
import { Cross2Icon } from '@radix-ui/react-icons';

function OutputItem(key) {
  const [hidden, setHidden] = React.useState(false);

  const [language, setLanguage] = React.useState("");

  const [content, setContent] = React.useState("");

  const languageSelect = (
    <OutputLanguage
      value={language}
      onChange={(event) => {
        setLanguage(event.target.value);
      }}
    >
      <option value={""}>--Select Language--</option>
      <option value="sp">Spanish</option>
      <option value="pt">Portuguese</option>
      <option value="de">German</option>
      <option value="fr">French</option>
    </OutputLanguage>
  );

  const item = (
    <OutputWrapper key={key}>
      <CloseButton onClick={() => setHidden(!hidden)}>
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

  return hidden === false ? item : null;
}

const OutputWrapper = styled.article`
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

export default OutputItem;

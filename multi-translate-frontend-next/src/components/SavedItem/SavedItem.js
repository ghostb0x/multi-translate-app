import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';

function SavedItem({ language, text }) {
  return (
    <Wrapper>
      <Selector
        readOnly
        value={language}
        disabled
      />
      <Textbox
        readOnly
        value={text}
      />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 5px 0;
  background: var(--color-gray-300);
  display: flex;
  flex-direction: column;
`;

const Selector = styled(LanguageSelector)`
  color: black;

`;

export default SavedItem;

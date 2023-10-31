import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Textbox from '../Textbox';
import { QUERIES } from '@/constants';

function SavedItem({ language, text }) {
  return (
    <Wrapper>
      <Selector
        readOnly
        value={language}
        disabled
      />
      <SavedTextbox
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

  @media ${QUERIES.laptopAndUp} {
  }
`;

const Selector = styled(LanguageSelector)`
  color: black;
`;

const SavedTextbox = styled(Textbox)`
  align-self: center;
  max-width: 900px;
`;

export default SavedItem;

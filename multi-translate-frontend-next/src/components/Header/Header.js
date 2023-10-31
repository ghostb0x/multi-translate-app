import React from 'react';
import styled from 'styled-components';
import SectionName from '../SectionName';

function Header() {
  return (
    <Wrapper>
      <SectionName type="h1">Multi-translate: Powered by Google Translate</SectionName>
    </Wrapper>
    );
}

const Wrapper = styled.header`
  margin-bottom: 10px;
  border-bottom: 1px solid;
  padding: 8px;
`;


export default Header;

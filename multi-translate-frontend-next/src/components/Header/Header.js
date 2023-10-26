import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Title>Powered by Google Translate</Title>
    </Wrapper>
    );
}

const Wrapper = styled.header`
  margin-bottom: 10px;
  border-bottom: 1px solid;
  padding: 10px;
`;

const Title = styled.h1`
  font-family: var(--font-roboto);
  font-size: 24px;
  text-align: center;
`;

export default Header;

import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants';

function Textbox({ ...delegated }) {
  return <Textarea {...delegated} />;
}

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  font-family: var(--font-roboto);
  font-size: 24px;
  border: none;
  background: var(--color-gray-300);
  color: var(--color-gray-900);
  padding-left: 8px;

  @media ${QUERIES.tabletAndUp} {
    max-width: 50%;
    margin: 1rem 10%;
  }
`;

export default Textbox;

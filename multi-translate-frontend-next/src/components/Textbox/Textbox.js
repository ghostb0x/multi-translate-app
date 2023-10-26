import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants';


const Textbox = styled.textarea`
  width: 100%;
  height: 100px;
  font-family: var(--font-roboto);
  font-size: 24px;

  @media ${QUERIES.tabletAndUp} {
    max-width: 50%;
    margin: 1rem 10%;
  }
`;

export default Textbox;

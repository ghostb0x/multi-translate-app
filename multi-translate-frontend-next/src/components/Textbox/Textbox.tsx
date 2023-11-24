import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants';

function Textbox({ ...delegated }, ref: React.ForwardedRef<HTMLTextAreaElement>) {
  return <Textarea ref={ref} {...delegated} />;
}

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  padding-left: 8px;

  background: var(--color-gray-300);
  font-family: var(--font-roboto);
  font-size: 24px;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletAndUp} {
    grid-area: text;
  }
`;

export default React.forwardRef(Textbox);

import React from 'react';
import { X } from 'react-feather';
import styled from 'styled-components';

function CloseButton({ ...delegated }) {
  return (
    <Button {...delegated}>
      <X />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: none;
`;

export default CloseButton;

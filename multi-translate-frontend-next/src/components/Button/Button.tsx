import { QUERIES } from '@/constants';
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
}

function Button({
  children,
  color,
  ...delegated
}: ButtonProps) {
  return (
    <TheButton
      color={color}
      {...delegated}
    >
      {children}
    </TheButton>
  );
}

const TheButton = styled.button`
  align-self: center;
  
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  
  width: 90%;
  border: none;
  border-radius: 10rem;
  padding: 0.5rem 3rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.color || `var(--color-primary)`};
  text-align: center;
  font-family: var(--font-roboto);
  font-size: 1.3rem;

  @media ${QUERIES.laptopAndUp} {
    grid-area: button;
    max-width: 800px;
  }
`;

export default Button;

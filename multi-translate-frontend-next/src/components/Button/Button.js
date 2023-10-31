import React from "react";
import styled from "styled-components";

function Button({children, className, color, width, marginTop, ...delegated}) {
  return (
    <TheButton className={className} $color={color} $width={width} $marginTop={marginTop} {...delegated}>
      {children}
    </TheButton>
  );
}

const TheButton = styled.button`
  border: none;
  border-radius: 10rem;
  padding: .5rem 3rem;
  margin-left: 5px;
  margin-right: 5px;
  width: ${(props) => props.$width || '90%'};
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  background: ${(props) => props.$color || '#9cc2ff'};
  margin-top: ${(props) => props.$marginTop || '10px'};
  font-family: var(--font-roboto);
  
`;


export default Button;

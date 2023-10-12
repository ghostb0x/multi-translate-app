import React from "react";
import styled from "styled-components";

function Button({children}) {
  return (
    <TheButton>
      {children}
    </TheButton>
  );
}

const TheButton = styled.button`
  border: 1px solid black;
  border-radius: 6px;
  padding: 6px;
`;


export default Button;

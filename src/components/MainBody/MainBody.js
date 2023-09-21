import React from "react";
import styled from 'styled-components';
import QueryInput from "../QueryInput/QueryInput";
import OutputsSection from "../OutputsSection/OutputsSection";



function MainBody() {
  return (
    <MainWrapper>
      <QueryInput/>
      <OutputsSection/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main``;

export default MainBody;

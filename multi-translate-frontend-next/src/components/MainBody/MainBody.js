import React from "react";
import styled from 'styled-components';
import QueryInput from "../QueryInput/QueryInput";
import OutputsSection from "../OutputsSection/OutputsSection";
import SavedSearches from "../SavedSearches/SavedSearches";



function MainBody() {
  return (
    <MainWrapper>
      <QueryInput/>
      <OutputsSection/>
      <SavedSearches />
    </MainWrapper>
  );
}

const MainWrapper = styled.main``;

export default MainBody;

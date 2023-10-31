import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { AppContext } from '../AppProvider/AppProvider';
import styled from 'styled-components';
import CloseButton from '../CloseButton';
import Button from '../Button';
import SavedItem from '../SavedItem';
import SectionName from '../SectionName';

function SavedSearches() {
  const { saved, setSaved, saveCurrentSearch, loadSave } =
    React.useContext(AppContext);

  const [showSaved, setShowSaved] = React.useState(false);

  //initialize saved searches from local storage - set to empty array if none found
  React.useEffect(() => {
    const stored = window.localStorage.getItem('saved-searches');
    if (stored) {
      setSaved(JSON.parse(stored));
    } else {
      setSaved([]);
    }
  }, []);

  const savedItems = saved.map(({ id, query, outputs }, index) => {
    let outputItems;

    if (outputs.length > 0) {
      outputItems = outputs.map((output, index) => {
        return (
          <SavedTranslation key={output.id}>
            <SavedItem
              language={output.language}
              text={output.text}
            />
          </SavedTranslation>
        );
      });
    } else {
      outputItems = 'No translation saved';
    }

    return (
      <SavedWrapper key={id}>
        <Col>
          <CloseButton onClick={() => removeSave(id)} />
          <SectionName type="h3">{`Save #${index + 1}`}</SectionName>
        </Col>
        <Button onClick={() => loadSave(query, outputs)}>
          Open Save in Editor
        </Button>
        <SectionName type="h4">Query</SectionName>
        <SavedItem
          language={query.language}
          text={query.text}
        />
        <SectionName type="h4">Translations</SectionName>
        <ul>{outputItems}</ul>
      </SavedWrapper>
    );
  });

  const displaySaves =
    saved === null ? (
      <LoadingSpinner />
    ) : Array.isArray(saved) && saved.length === 0 ? (
      'No saved searches'
    ) : (
      savedItems
    );

  function removeSave(id) {
    let newSaves = [...saved];
    newSaves = newSaves.filter((save) => save.id !== id);

    const stringifiedSaves = JSON.stringify(newSaves);
    window.localStorage.setItem('saved-searches', stringifiedSaves);
    setSaved(newSaves);
  }

  return (
    <Wrapper>
      <SectionName type="h2">Saved Searches</SectionName>
      <ButtonsWrapper>
        <Button onClick={saveCurrentSearch}>
          Save Current Search
        </Button>
        <Button
          color="#a0f1f2"
          onClick={() => setShowSaved(!showSaved)}
        >
          {showSaved ? 'Hide Saved Searches' : 'View Saved Searches'}
        </Button>
      </ButtonsWrapper>
      <SavedData>{showSaved ? displaySaves : null}</SavedData>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 10px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SavedData = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const SavedWrapper = styled.article`
  display: flex;
  flex-direction: column;
  border-top: 1px solid;
  padding: 5px 0 0 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SavedTranslation = styled.li``;

// const SectionName = styled.p`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   align-self: center;
//   font-weight: 700;
// `;

export default SavedSearches;

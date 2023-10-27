import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { AppContext } from '../AppProvider/AppProvider';
import styled from 'styled-components';
import Textbox from '../Textbox';
import LanguageSelector from '../LanguageSelector';
import CloseButton from '../CloseButton';

function SavedSearches() {
  // this is a bar at the top - it has an "Add to saved search" button, and a "view saved searches" button
  // after a saved search is saved, the "view saved searches" button flashes as an indicator that query was saved
  // when "view saved searches" is clicked, a modal renders to show saved search history

  const { saved, setSaved, saveCurrentSearch } =
    React.useContext(AppContext);

  const [showSaved, setShowSaved] = React.useState(false);

  //initialize saved searches from local storage - set to empty array if none found
  React.useEffect(() => {
    const stored = window.localStorage.getItem('saved-searches');
    if (stored) {
      console.log('setting saved to: ' + stored);
      const parsed = JSON.parse(stored);
      console.log(Object.keys(parsed));
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
            <LanguageSelector
              value={output.language}
            ></LanguageSelector>
            <Textbox>{output.text}</Textbox>
          </SavedTranslation>
        );
      });
    } else {
      outputItems = 'No translation saved';
    }

    return (
      <SavedItem key={query.texy}>
        <Row>
          <p>{`Save number ${index + 1}`}</p>
          <Col>
            <CloseButton onClick={() => removeSave(id)} />
            <p>Delete Save</p>
          </Col>
        </Row>
        <SectionName>Query:</SectionName>
        <LanguageSelector value={query.language}></LanguageSelector>
        <Textbox value={query.text} />
        <SectionName>Translations:</SectionName>
        <ul>{outputItems}</ul>
      </SavedItem>
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
    console.log(id);
    let newSaves = [...saved];
    newSaves = newSaves.filter((save) => save.id !== id);

    const stringifiedSaves = JSON.stringify(newSaves);
    window.localStorage.setItem('saved-searches', stringifiedSaves);
    setSaved(newSaves);
  }

  return (
    <div>
      <h2>Saved Searches</h2>
      <ButtonsWrapper>
        <Button
          onClick={saveCurrentSearch}
          $color="cornflowerblue"
        >
          Save Current Search
        </Button>
        <Button
          onClick={() => setShowSaved(!showSaved)}
          $color="darkseagreen"
        >
          {showSaved ? 'Hide Saved Searches' : 'View Saved Searches'}
        </Button>
      </ButtonsWrapper>
      <SavedData>{showSaved ? displaySaves : null}</SavedData>
    </div>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: ${(props) => props.$color || '#BF4F74'};
  border: none;
  padding: 5px;
  width: 50%;
  height: 50px;
`;

const SavedData = styled.div`
  display: flex;
  flex-direction: column;
`;

const SavedItem = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 5px;
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

const SectionName = styled.p`
  font-family: var(--font-roboto);
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default SavedSearches;

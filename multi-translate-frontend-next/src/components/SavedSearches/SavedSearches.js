import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { AppContext } from '../AppProvider/AppProvider';
import styled from 'styled-components';
import CloseButton from '../CloseButton';
import Button from '../Button';
import SavedItem from '../SavedItem';
import SectionName from '../SectionName';
import { QUERIES } from '@/constants';

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
      outputItems = outputs.map((output) => {
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
        <Top>
          <Close onClick={() => removeSave(id)} />
          <SectionName type="h3">{`Save #${index + 1}`}</SectionName>
          <Button onClick={() => loadSave(query, outputs)}>
            Open Save in Editor
          </Button>
        </Top>
        <SectionName type="h4">Query</SectionName>
        <SavedItem
          language={query.language}
          text={query.text}
        />
        <SectionName type="h4">Translations</SectionName>
        <SavedOutputs>{outputItems}</SavedOutputs>
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
          color="var(--color-secondary)"
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

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
  }
`;

const SavedData = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const SavedWrapper = styled.article`
  border-top: 1px solid;
  padding: 5px 0 0 0;
  display: flex;
  flex-direction: column;
`;


const Top = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Close = styled(CloseButton)`
  position: absolute;
`;

const SavedOutputs = styled.ul`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 10px;
  }
`;

const SavedTranslation = styled.li``;

export default SavedSearches;

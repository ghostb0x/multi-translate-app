import React from 'react';
import { useQueryRefContext } from '../QueryInput/useQueryRef';
import { OutputType, SavedItemType } from '@/lib/types';

type OutputsProviderValueType = ReturnType<
  typeof useOutputContextManager
>;

export const OutputsContext =
  React.createContext<OutputsProviderValueType | null>(null);

function useOutputContextManager() {
  const { queryText, setQueryText, queryLang, setQueryLang } =
    useQueryRefContext();


  const [outputs, setOutputs] = React.useState<OutputType[]>([
    { id: '1', language: '', text: '' },
  ]);
  const [saved, setSaved] = React.useState<SavedItemType[]>([]);

  function loadSave(
    savedQuery: SavedItemType['query'],
    savedOutputs: SavedItemType['outputs']
  ) {
    setOutputs(savedOutputs);
    setQueryText(savedQuery.text);
    setQueryLang(savedQuery.language);
  }

  // saved searches functionality:

  // (v2) Upon first using "add to saved search"
  //    - display warning alert that items saved in storage are not secure from hackers
  //    - so no sensitive password data should ever be inputted and saved
  //    - add acknowledgement before allowing

  // store saved queries in local storage when "save" button is clicked
  function saveCurrentSearch() {
    // spread operator does not make a deep copy, which causes changes to outputs array
    // to propogate to the saved state in local storage
    const deepCopyOutputs = structuredClone(outputs);

    // if any output in deepCopyOutputs has id="1", update to cryptoRandom
    const outputIndex = deepCopyOutputs.findIndex(
      (output) => output.id === '1'
    );

    if (outputIndex !== -1) {
      deepCopyOutputs[outputIndex]['id'] = crypto.randomUUID();
    }

    const currentSearch = {
      id: crypto.randomUUID(),
      query: {
        language: queryLang,
        text: queryText.current!.value,
      },
      outputs: deepCopyOutputs,
    };

    const newSaves = [...saved];
    newSaves.push(currentSearch);
    const stringifiedSaves = JSON.stringify(newSaves);
    window.localStorage.setItem('saved-searches', stringifiedSaves);
    setSaved(newSaves);
  }

  return {
    outputs,
    setOutputs,
    saveCurrentSearch,
    saved,
    setSaved,
    loadSave,
  };
}

export function OutputsProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <OutputsContext.Provider value={useOutputContextManager()}>
      {children}
    </OutputsContext.Provider>
  );
}

export function useOutputsContext() {
  const contextValues = React.useContext(OutputsContext);
  if (!contextValues) {
    throw 'You need to be within OutputsProvider to use useOutputsContext';
  }
  return contextValues;
}

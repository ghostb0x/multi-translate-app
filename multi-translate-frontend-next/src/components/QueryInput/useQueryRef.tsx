import React, { createContext } from 'react';
import axios from 'axios';

type ManagerType = ReturnType<typeof useQueryRefManager>;

interface TranslationData {
  data: Record<"translations", [Record<"translatedText", string>]>;
}

export const QueryRefContext = createContext<ManagerType | null>(null);

function useQueryRefManager(){
  const queryText = React.useRef<HTMLTextAreaElement>(null);

  // returned to using useState for lang bc select input behaves
  // very differently from textArea - ref works well for queryText
  const [queryLang, setQueryLang] = React.useState<string>('');

  function setQueryText(text: string) {
    if (queryText.current) {
      queryText.current.value = text;
    }
  }

  const [triggerFetch, setTriggerFetch] = React.useState<number>(0);

  async function getTranslation(output_lang: string) {

    const options = {
      method: 'GET',
      url: 'api/translation',
      params: {
        q: queryText.current?.value,
        source: queryLang,
        target: output_lang,
        format: 'text',
      },
    };

    try {
      const response = await axios.request<TranslationData>(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    queryText,
    setQueryText,
    queryLang,
    setQueryLang,
    getTranslation,
    setTriggerFetch,
    triggerFetch,
  };
}

export function QueryRefProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <QueryRefContext.Provider value={useQueryRefManager()}>
      {children}
    </QueryRefContext.Provider>
  );
}


export function useQueryRefContext() {
  const contextValues = React.useContext(QueryRefContext);
  if (!contextValues) {
    throw "You need to be within QueryRefProvider to use useQueryRefContext"
  }
  return contextValues;
} 
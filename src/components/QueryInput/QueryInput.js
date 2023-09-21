import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';

function QueryInput() {
  const { queryText, setQueryText } = React.useContext(AppContext);

  return (
    <div>
      <label htmlFor="input">
        Input your Query
      </label>
      <textarea
        id="input"
        value={queryText}
        onChange={(event) => {
          setQueryText(event.target.value);
        }}
      />
    
    </div>
  );
}

export default QueryInput;

import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function SavedSearches() {
  const [saved, setSaved] = React.useState(null);

  //initialize saved searches from local storage - set to empty array if none found
  React.useEffect(() => {
    const stored = window.localStorage.getItem('saved-searches');
    if (stored) {
      setSaved(JSON.parse(stored));
    } else {
      setSaved([]);
    }
  }, []);



  return (
    <div>
      <h2>Saved Searches</h2>
      {saved === null ? <LoadingSpinner/> : }
      
    </div>
  );
}

export default SavedSearches;

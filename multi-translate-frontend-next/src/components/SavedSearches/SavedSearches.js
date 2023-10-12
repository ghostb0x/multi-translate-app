import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { AppContext } from '../AppProvider/AppProvider';


function SavedSearches() {

  const {
    saved,
    setSaved
  } = React.useContext(AppContext);

  //initialize saved searches from local storage - set to empty array if none found
  React.useEffect(() => {
    const stored = window.localStorage.getItem('saved-searches');
    if (stored) {
      console.log("setting saved to: "+stored)
      const parsed = JSON.parse(stored);
      console.log(Object.keys(parsed))
      setSaved(JSON.parse(stored));
    } else {
      setSaved([]);
    }
  }, []);



  return (
    <div>
      <h2>Saved Searches</h2>
      {saved === null ? <LoadingSpinner/> 
        : (Array.isArray(saved) && saved.length === 0)  ? "No saved searches"
        : JSON.stringify(saved)}
      
    </div>
  );
}

export default SavedSearches;

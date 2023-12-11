import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import ResultDetail from "./components/ResultDetail";

function App() {
  const [results, setResults] = useState([]);
  const [selectedObjectId, setSelectedObjectId] = useState(null);

  const handleResultClick = (objectId) => {
    setSelectedObjectId(objectId);
  };
  const handleBackToSearch = () => {
    setSelectedObjectId(null);
  };
  return (
    <div className="App">
      <div className="search-bar-container">
        {selectedObjectId ? (
          <ResultDetail objectId={selectedObjectId} onBack={handleBackToSearch} />
        ) : (
          <SearchBar setResults={setResults} onResultClick={handleResultClick} />
        )}
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}
export default App;

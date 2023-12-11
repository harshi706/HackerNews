import React, { useState } from 'react';
import { SearchBar } from './SearchBar';

const ParentComponent = () => {
  const [results, setResults] = useState([]);
  const [selectedObjectId, setSelectedObjectId] = useState(null);

  const handleResultClick = (objectId) => {
    setSelectedObjectId(objectId);
  };
  const handleBackToSearch = () => {
    setSelectedObjectId(null);
  };
  return (
    <div>
      {selectedObjectId ? (
        <PostDetail objectId={selectedObjectId} onBack={handleBackToSearch} />
      ) : (
        <SearchBar setResults={setResults} onResultClick={handleResultClick} />
      )}
    </div>
  );
};
export default ParentComponent;
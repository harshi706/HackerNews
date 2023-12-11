import React from "react";
export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => console.log(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
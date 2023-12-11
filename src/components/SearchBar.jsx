import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export const SearchBar = ({ setResults, onResultClick }) => {
  const [input, setInput] = useState("");
  const [localResults, setLocalResults] = useState([]);

  const fetchData = (value) => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${value}`)
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.hits.filter((item) => (
          item &&
          item.title &&
          item.title.toLowerCase().includes(value.toLowerCase())
        ));
        setLocalResults(filteredResults);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  const handleResultClick = (result) => {
    onResultClick(result.objectID);
  };
  return (
    <>
  <div className="text-center mt-3">
      <div className="heading fw-bold fs-3">HACKER NEWS</div>
    </div>
        <div className="d-flex flex-column align-items-start mb-3 input-wrapper">
      <div className="input-group">
        <span className="input-group-text" id="search-icon">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="result-container mt-2">
        <ul className="list-group">
          {localResults.map((result) => (
            <li
              key={result.objectID}
              className="list-group-item cursor-pointer custom-hover"
              style={{ cursor: "pointer" }}
              onClick={() => handleResultClick(result)}
            >
              {result.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

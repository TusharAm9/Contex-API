import React from "react";

export const Search = ({ city, setCity, handleSearch }) => {
  return (
    <div className="Search-feild">
      <input
        type="text"
        className="search-input"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="searchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

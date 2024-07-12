import React from "react";

function SearchInput({ searchTerm, handleSearchChange }) {
  return (
    <div className="form-group">
      <input
        type="text"
        name="search"
        className="form-control"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchInput;

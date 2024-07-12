import React from "react";

function LanguageSelector({ language, handleLanguageChange }) {
  return (
    <div className="form-group">
      <select
        value={language}
        className="form-control"
        onChange={handleLanguageChange}
      >
        <option value="">Sélectionner une langue</option>
        <option value="js">JavaScript</option>
        <option value="php">PHP</option>
      </select>
    </div>
  );
}

export default LanguageSelector;

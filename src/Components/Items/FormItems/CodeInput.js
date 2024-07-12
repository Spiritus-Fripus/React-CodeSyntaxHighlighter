import React from "react";

function CodeInput({ code, handleCodeChange }) {
  return (
    <div className="form-group">
      <textarea
        name="text"
        className="form-control mb-2"
        placeholder="Texte"
        rows="10"
        value={code}
        onChange={handleCodeChange}
        style={{ height: "400px" }}
      />
    </div>
  );
}

export default CodeInput;

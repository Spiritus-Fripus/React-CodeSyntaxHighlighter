import React from "react";

function LanguageFilter({ language, handleFilterLanguage }) {
  return (
    <div className="btn-group" role="group" aria-label="Filtre par langue">
      <button
        onClick={() => handleFilterLanguage("")}
        className={`btn btn-secondary ${language === "" ? "active" : ""}`}
      >
        Tous
      </button>
      <button
        onClick={() => handleFilterLanguage("js")}
        className={`btn btn-secondary ${language === "js" ? "active" : ""}`}
      >
        JavaScript
      </button>
      <button
        onClick={() => handleFilterLanguage("php")}
        className={`btn btn-secondary ${language === "php" ? "active" : ""}`}
      >
        PHP
      </button>
      <button
        onClick={() => handleFilterLanguage("python")}
        className={`btn btn-secondary ${language === "python" ? "active" : ""}`}
      >
        Python
      </button>
      <button
        onClick={() => handleFilterLanguage("java")}
        className={`btn btn-secondary ${language === "java" ? "active" : ""}`}
      >
        Java
      </button>
      <button
        onClick={() => handleFilterLanguage("cs")}
        className={`btn btn-secondary ${language === "cs" ? "active" : ""}`}
      >
        C#
      </button>
    </div>
  );
}

export default LanguageFilter;

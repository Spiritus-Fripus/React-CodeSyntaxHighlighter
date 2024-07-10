import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as vscDarkPlusTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";

function FormCodeHighlighter(props) {
  const {
    title,
    setTitle,
    code,
    setCode,
    language,
    setLanguage,
    save,
    searchTerm,
    setSearchTerm,
    handleFilterLanguage,
  } = props;
  const captureRef = useRef(null); // Référence pour capturer l'élément SyntaxHighlighter

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h2>Code Syntax Highlighter</h2>

      <div className="row">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Titre"
          value={title}
          onChange={handleTitleChange}
        />
        <div className="col-md-6">
          <h3>Envoi de code</h3>
          <form>
            <div className="form-group">
              <textarea
                name="text"
                className="form-control mb-2"
                placeholder="Texte"
                rows="10"
                value={code}
                onChange={handleCodeChange}
                style={{ height: "400px" }} // Ajustement de la hauteur du textarea
              />
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <h3>Preview</h3>
          <div className="mb-3">
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlusTheme}
              wrapLines={true}
              customStyle={{
                fontSize: "14px",
                lineHeight: "1.5",
                height: "400px",
                overflow: "auto",
                border: "1px solid #ddd",
                padding: "10px",
              }}
              ref={captureRef}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className="row mt-6">
        <div className="col-md-12">
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
        </div>
      </div>
      <div className="col-md-12">
        <button onClick={save} type="button" className="btn btn-primary w-100">
          Envoyer
        </button>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
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
        </div>
        <div className="col-md-12">
          <div
            className="btn-group"
            role="group"
            aria-label="Filtre par langue"
          >
            <button
              onClick={() => handleFilterLanguage("")}
              className={`btn btn-secondary ${language === "" ? "active" : ""}`}
            >
              Tous
            </button>
            <button
              onClick={() => handleFilterLanguage("js")}
              className={`btn btn-secondary ${
                language === "js" ? "active" : ""
              }`}
            >
              JavaScript
            </button>
            <button
              onClick={() => handleFilterLanguage("php")}
              className={`btn btn-secondary ${
                language === "php" ? "active" : ""
              }`}
            >
              PHP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCodeHighlighter;

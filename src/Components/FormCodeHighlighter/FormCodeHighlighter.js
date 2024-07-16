import React, { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as vscDarkPlusTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CodeInput from "../Items/FormItems/CodeInput";
import LanguageSelector from "../Items/FormItems/LanguageSelector";
import SearchInput from "../Items/FormItems/SearchInput";
import LanguageFilter from "../Items/FormItems/LanguageFilter";

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
    setLoggedIn,
  } = props;
  const captureRef = useRef(null);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const Logout = () => {
    localStorage.removeItem("userId");
    setLoggedIn(false);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center mb-3 w-100">
          <h2>Code Syntax Highlighter</h2>
          <button className="btn btn-dark" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>

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
            <CodeInput
              code={code}
              handleCodeChange={(e) => setCode(e.target.value)}
            />
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
          <LanguageSelector
            language={language}
            handleLanguageChange={(e) => setLanguage(e.target.value)}
          />
        </div>
      </div>
      <div className="col-md-12">
        <button onClick={save} type="button" className="btn btn-primary w-100">
          Envoyer
        </button>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <SearchInput
            searchTerm={searchTerm}
            handleSearchChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <LanguageFilter
            language={language}
            handleFilterLanguage={handleFilterLanguage}
          />
        </div>
      </div>
    </div>
  );
}

export default FormCodeHighlighter;

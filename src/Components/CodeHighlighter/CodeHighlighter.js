import React, { useEffect, useRef, useState } from "react";
import FormCodeHighlighter from "./FormCodeHighlighter";
import Page from "../Items/Page";
import CopyToClipboard from "../Items/CopyToClipboard";
import ExportAsFile from "../Items/ExportAsFile";
import ExportAsImage from "../Items/ExportAsImage";
import DeleteItem from "../Items/DeleteItem";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as vscDarkPlusTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeHighlighter() {
  const [tab, setTab] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const captureRefs = useRef([]);
  const itemsPerPage = 5;

  useEffect(() => {
    const storedTab = JSON.parse(localStorage.getItem("tab"));
    if (storedTab) {
      setTab(storedTab);
    }
    setSearchTerm("");
    setFilterLanguage("");
    setCurrentPage(0);
  }, []);

  const handleFilterLanguage = (language) => {
    setFilterLanguage(language);
    setCurrentPage(0);
  };

  const filteredItems = tab
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.language.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (item) => filterLanguage === "" || item.language === filterLanguage,
    );

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

  const saveNewItem = () => {
    const newTab = [...tab, { title: title, code: code, language: language }];
    setTab(newTab);
    localStorage.setItem("tab", JSON.stringify(newTab));
    setTitle("");
    setCode("");
    setLanguage("");
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleDeleteItem = (index) => {
    const newTab = [...tab];
    newTab.splice(index, 1);
    setTab(newTab);
    localStorage.setItem("tab", JSON.stringify(newTab));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <FormCodeHighlighter
            title={title}
            setTitle={setTitle}
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            save={saveNewItem}
            handleFilterLanguage={handleFilterLanguage} // Passer la fonction handleFilterLanguage comme prop
          />
        </div>
      </div>
      <br />
      <div className="highlight-code">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <div
                  ref={(el) => (captureRefs.current[offset + index] = el)}
                  className="mb-3"
                >
                  <SyntaxHighlighter
                    language={item.language}
                    style={vscDarkPlusTheme}
                    wrapLines={true}
                    customStyle={{ fontSize: "14px", lineHeight: "1.5" }}
                  >
                    {item.code}
                  </SyntaxHighlighter>
                </div>
                <div className="d-flex justify-content-between">
                  <DeleteItem
                    tab={tab}
                    setTab={setTab}
                    index={offset + index}
                    handleDelete={handleDeleteItem}
                  />
                  <CopyToClipboard data={item} />
                  <ExportAsImage
                    captureRefs={captureRefs}
                    index={offset + index}
                    item={item}
                  />
                  <ExportAsFile
                    captureRefs={captureRefs}
                    index={offset + index}
                    item={item}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Aucun élément trouvé.</div>
        )}
        <Page
          data={filteredItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default CodeHighlighter;

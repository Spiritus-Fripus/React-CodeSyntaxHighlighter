import React, { useEffect, useRef, useState } from "react";
import FormCodeHighlighter from "../FormCodeHighlighter/FormCodeHighlighter";
import ItemList from "../Items/Items/ItemList";
import Pagination from "../Items/PageItems/Pagination";
import { ref, push, onValue } from "firebase/database";
import { database } from "../../firebase";

function CodeHighlighter() {
  const [tab, setTab] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [language, setLanguage] = useState("");
  const captureRefs = useRef([]);
  const itemsPerPage = 5;

  useEffect(() => {
    if (!loaded) {
      const itemsRef = ref(database, "items");
      onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const itemsList = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setTab(itemsList);
          setLoaded(true);
        } else {
          setTab([]);
        }
      });
      setSearchTerm("");
      setFilterLanguage("");
      setCurrentPage(0);
    }
  }, [loaded]);

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
    const newItem = { title, code, language };

    const itemsRef = ref(database, "items");
    setTab([...tab, newItem]);
    push(itemsRef, newItem)
      .then(() => {
        console.log("Item saved successfully");

        // Réinitialiser les champs après envoi
        setTitle("");
        setCode("");
        setLanguage("");
      })
      .catch((error) => {
        console.error("Error saving item:", error);
      });
  };
  const handleFilterLanguage = (language) => {
    setFilterLanguage(language);
    setCurrentPage(0);
  };
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
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
            handleFilterLanguage={handleFilterLanguage}
            save={saveNewItem}
          />
        </div>
      </div>
      <br />
      <div className="highlight-code">
        <ItemList
          items={currentItems}
          offset={offset}
          captureRefs={captureRefs}
        />
        <Pagination
          filteredItems={filteredItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default CodeHighlighter;

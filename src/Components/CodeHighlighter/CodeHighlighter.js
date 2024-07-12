import React, { useEffect, useRef, useState } from "react";
import FormCodeHighlighter from "../FormCodeHighlighter/FormCodeHighlighter";
import ItemList from "../Items/CardItems/ItemList";
import Pagination from "../Items/PageItems/Pagination";
import { ref, push, onValue, remove } from "firebase/database";
import { database } from "../../firebase";

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
    const itemsRef = ref(database, "items");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemsList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setTab(itemsList);
      } else {
        setTab([]);
      }
    });
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
    const newItem = { title, code, language };

    const itemsRef = ref(database, "items");
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

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleDeleteItem = (itemId) => {
    const itemRef = ref(database, `items/${itemId}`);
    remove(itemRef)
      .then(() => {
        console.log("Item deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
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
            handleFilterLanguage={handleFilterLanguage}
          />
        </div>
      </div>
      <br />
      <div className="highlight-code">
        <ItemList
          items={currentItems}
          offset={offset}
          captureRefs={captureRefs}
          tab={tab}
          setTab={setTab}
          handleDeleteItem={handleDeleteItem}
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

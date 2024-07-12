import React from "react";
import Page from "./Page";

const Pagination = ({ filteredItems, itemsPerPage, onPageChange }) => {
  return (
    <Page
      data={filteredItems}
      itemsPerPage={itemsPerPage}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;

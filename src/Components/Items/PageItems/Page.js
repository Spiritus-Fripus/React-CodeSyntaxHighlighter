import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Page({ data, itemsPerPage, onPageChange }) {
  // État local pour gérer la page actuelle de la pagination
  const [currentPage, setCurrentPage] = useState(0);

  // État local pour stocker les données filtrées (non utilisé dans ce code)
  const [filteredData, setFilteredData] = useState(data);

  // Effet déclenché lorsque les données changent
  useEffect(() => {
    // Réinitialiser à la première page lorsque les données changent
    setCurrentPage(0);
    // Mettre à jour filteredData avec les nouvelles données (non utilisé ici)
    setFilteredData(data);
  }, [data]); // Déclencher l'effet lorsque la propriété 'data' change

  // Gestion du clic sur une page de la pagination
  const handlePageClick = ({ selected }) => {
    // Mettre à jour l'état currentPage avec la page sélectionnée
    setCurrentPage(selected);
    // Appeler la fonction onPageChange avec la page sélectionnée
    onPageChange(selected);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      {/* Composant ReactPaginate pour la pagination */}
      <ReactPaginate
        previousLabel={"Previous"} // Libellé pour le bouton 'Précédent'
        nextLabel={"Next"} // Libellé pour le bouton 'Suivant'
        breakLabel={"..."} // Libellé pour les points de suspension entre les pages
        pageCount={Math.ceil(data.length / itemsPerPage)} // Nombre total de pages à paginer
        marginPagesDisplayed={2} // Nombre de pages adjacentes à afficher autour des boutons de navigation
        pageRangeDisplayed={3} // Nombre de pages à afficher dans la barre de pagination
        onPageChange={handlePageClick} // Gestionnaire appelé lors du changement de page
        renderOnZeroPageCount={null} // Ne pas afficher la pagination lorsque pageCount est 0
        containerClassName={"pagination"} // Classe CSS pour le conteneur de la pagination
        activeClassName={"active"} // Classe CSS pour marquer la page active
        pageClassName={"page-item"} // Classe CSS pour les éléments de page
        pageLinkClassName={"page-link"} // Classe CSS pour les liens des éléments de page
        previousClassName={"page-item"} // Classe CSS pour les éléments précédents
        previousLinkClassName={"page-link"} // Classe CSS pour les liens des éléments précédents
        nextClassName={"page-item"} // Classe CSS pour les éléments suivants
        nextLinkClassName={"page-link"} // Classe CSS pour les liens des éléments suivants
        breakClassName={"page-item"} // Classe CSS pour les éléments de rupture ('...')
        breakLinkClassName={"page-link"} // Classe CSS pour les liens des éléments de rupture
      />
    </div>
  );
}

export default Page;

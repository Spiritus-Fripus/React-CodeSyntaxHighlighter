import React from "react";

function DeleteItem({ tab, setTab, index }) {
  // Fonction pour supprimer un élément de tab et mettre à jour localStorage si nécessaire
  const deleteItem = (index) => {
    // Créer une copie de newTab à partir de tab pour éviter la mutation directe de l'état
    const newTab = [...tab];

    // Supprimer l'élément à l'index spécifié de newTab
    newTab.splice(index, 1);

    // Mettre à jour l'état de tab avec la nouvelle copie modifiée
    setTab(newTab);

    // Mettre à jour localStorage avec le nouveau newTab ou le vider si newTab est vide
    if (newTab.length === 0) {
      localStorage.clear(); // Effacer toutes les données de localStorage
    } else {
      localStorage.setItem("tab", JSON.stringify(newTab)); // Mettre à jour localStorage avec newTab
    }
  };

  return (
    <div>
      {/* Bouton pour déclencher la suppression de l'élément */}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteItem(index)}
      >
        Supprimer
      </button>
    </div>
  );
}

export default DeleteItem;

import React from "react";
import { ref, remove } from "firebase/database";
import { database } from "../../../firebase/firebase";

function DeleteItem({ itemId }) {
  const userId = localStorage.getItem("userId");
  const deleteItem = (itemId) => {
    // Référence de l'élément à supprimer dans Firebase
    const itemRef = ref(database, `items/${userId}/${itemId}`);

    // Supprimer l'élément de Firebase
    remove(itemRef)
      .then(() => {
        console.log("Item deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div>
      {/* Bouton pour déclencher la suppression de l'élément */}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteItem(itemId)}
      >
        Supprimer
      </button>
    </div>
  );
}

export default DeleteItem;

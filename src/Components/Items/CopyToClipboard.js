import React from "react";

function CopyToClipboard({ data }) {
  // Fonction pour copier du texte dans le presse-papiers
  const copyToClipboard = (text) =>
    navigator.clipboard.writeText(text).then(() => {
      // Afficher une alerte pour informer l'utilisateur que le texte a été copié
      alert("Copié dans le presse-papiers !");
    });

  return (
    <div>
      {/* Bouton pour déclencher la copie dans le presse-papiers */}
      <button
        type="button"
        className="btn btn-info"
        onClick={() => copyToClipboard(data.code)}
      >
        Copier dans le presse-papiers
      </button>
    </div>
  );
}

export default CopyToClipboard;

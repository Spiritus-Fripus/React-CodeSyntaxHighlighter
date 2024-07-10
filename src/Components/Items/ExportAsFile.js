import React from "react";
import download from "downloadjs"; // Utilitaire pour télécharger des fichiers depuis le navigateur

function ExportAsFile({ captureRefs, index, item }) {
  // Fonction pour exporter le contenu d'un élément en tant que fichier texte
  const exportAsFile = async (index, title, ext) => {
    // Récupérer l'élément à exporter à partir de captureRefs
    const element = captureRefs.current[index];

    // Générer les données du fichier texte avec le contenu de l'élément
    const data = `data:text/plain;charset=utf-8,${encodeURIComponent(
      element.innerText || element.textContent,
    )}`;

    // Préparer un titre pour le fichier en retirant les espaces
    const regexTitle = title.replace(/\s+/g, "");

    // Télécharger le fichier avec downloadjs en utilisant les données et l'extension spécifiée
    download(data, `${regexTitle}.${ext}`);
  };

  return (
    <div>
      {/* Bouton pour déclencher l'exportation en tant que fichier */}
      <button
        type="button"
        className="btn btn-success"
        onClick={() => exportAsFile(index, item.title, item.language)}
      >
        Exporter en fichier
      </button>
    </div>
  );
}

export default ExportAsFile;

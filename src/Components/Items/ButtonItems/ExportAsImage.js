import React from "react";
import html2canvas from "html2canvas"; // Bibliothèque pour capturer le contenu HTML en tant que canvas
import download from "downloadjs"; // Utilitaire pour télécharger des fichiers depuis le navigateur

function ExportAsImage({ captureRefs, index, item }) {
  // Fonction pour exporter le contenu d'un élément en tant qu'image PNG
  const exportAsImage = async (index, title) => {
    // Récupérer l'élément à capturer en image à partir de captureRefs
    const element = captureRefs.current[index];

    // Capturer l'élément en tant que canvas avec html2canvas
    const canvas = await html2canvas(element);

    // Convertir le canvas en URL de données (base64) au format PNG
    const data = canvas.toDataURL("image/png");

    // Préparer un titre pour le fichier en retirant les espaces
    const regexTitle = title.replace(/\s+/g, "");

    // Télécharger l'image avec downloadjs en utilisant l'URL de données
    download(data, `${regexTitle}.png`);
  };

  return (
    <div>
      {/* Bouton pour déclencher l'exportation en tant qu'image */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => exportAsImage(index, item.title)}
      >
        Exporter en image
      </button>
    </div>
  );
}

export default ExportAsImage;

import React, { useEffect, useState } from "react";

function Clock() {
  // Obtenir l'heure et la date actuelles
  let time = new Date().toLocaleTimeString();
  let showDate = new Date().toLocaleDateString();

  // Utilisation de useState pour gérer l'état de l'heure affichée
  const [showTime, setTime] = useState(time);

  // Fonction pour mettre à jour l'heure affichée
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString(); // Obtenir l'heure actuelle
    setTime(time); // Mettre à jour l'état avec la nouvelle heure
  };

  // Utilisation de useEffect pour démarrer l'intervalle de mise à jour de l'heure
  useEffect(() => {
    const interval = setInterval(UpdateTime, 1000); // Appeler UpdateTime chaque seconde (1000 ms)
    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, []); // Le tableau vide indique que useEffect ne doit être exécuté qu'une seule fois après le montage initial

  return (
    <div className="container mt-4 text-center">
      <div className="card p-4 shadow-lg">
        <h1 className="card-subtitle mb-2 text-muted">{showDate}</h1>
        <h2 className="display-4">{showTime}</h2>
      </div>
    </div>
  );
}

export default Clock;

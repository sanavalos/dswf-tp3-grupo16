import React from "react";
import styles from "./DirectorCard.module.css";

const DirectorCard = ({ directorData }) => {
  return (
    <div className={styles.cardStyle}>
      <h2>
        {directorData.director} <span>({directorData.nationality})</span>
      </h2>
      <h3>{directorData.known_for_genre.join(", ")}</h3>
      <h4>Activo: <span>{directorData.era_active}</span></h4>

      <h4>Filmaciones notables:</h4>
      <ul>
        {directorData.notable_films.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>

      <h4>Estilo distintivo:</h4>
      <p>{directorData.signature_style_elements.join(", ")}</p>
    </div>
  );
};

export default DirectorCard;
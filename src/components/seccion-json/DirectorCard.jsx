import React from "react";
import styles from "./DirectorCard.module.css";

const DirectorCard = ({ directorData }) => {
  return (
    <div className={styles.cardStyle}>
      <h2>{directorData.director}</h2>
      <p>
        <strong>Nationality:</strong> {directorData.nationality}
      </p>
      <p>
        <strong>Active:</strong> {directorData.era_active}
      </p>
      <p>
        <strong>Genre:</strong> {directorData.known_for_genre}
      </p>

      <h4>Notable Films:</h4>
      <ul>
        {directorData.notable_films.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>

      <h4>Signature Style:</h4>
      <p>{directorData.signature_style_elements.join(", ")}</p>
    </div>
  );
};

export default DirectorCard;

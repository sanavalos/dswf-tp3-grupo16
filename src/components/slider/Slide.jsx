import React from "react";
import styles from "./Slider.module.css";

export default function Slide({
  title,
  img,
  trailerUrl,
  activo,
  onVerTrailer,
}) {
  return (
    <div
      className={`${styles.slide} ${activo ? styles.active : ""}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h3>{title}</h3>
      <button onClick={() => onVerTrailer(trailerUrl)}>Ver Trailer</button>
    </div>
  );
}

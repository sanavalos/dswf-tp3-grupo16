import React from "react";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ movies, onImageClick }) {
  return (
    <div className={styles.imageGrid}>
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={styles.imageItem}
          onClick={() => onImageClick(index)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
}

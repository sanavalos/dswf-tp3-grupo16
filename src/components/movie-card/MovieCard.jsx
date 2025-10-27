import React from "react";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie, onClick }) {
  if (!movie.poster_path || !movie.overview) return null;

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={movie.title} className={styles.poster} />
        <div className={styles.overlay}>
          <h3>{movie.title}</h3>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.details}>
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>{movie.release_date?.slice(0, 4) || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

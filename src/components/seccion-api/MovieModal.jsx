import React from "react";
import styles from "./MovieModal.module.css";

export default function MovieModal({ movie, onClose, genres }) {
  if (!movie) return null;

  const movieGenres = movie.genre_ids?.map(
    (id) => genres.find((g) => g.id === id)?.name
  ) || ["N/A"];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : "/placeholder.png"
            }
            alt={movie.title}
            className={styles.poster}
          />
          <div className={styles.info}>
            <h2>{movie.title}</h2>
            <p>
              <strong>Año:</strong> {movie.release_date?.split("-")[0]}
            </p>
            <p>
              <strong>Géneros:</strong> {movieGenres.join(", ")}
            </p>
            <p className={styles.overview}>{movie.overview}</p>
            <p>
              <strong>Rating:</strong> {movie.vote_average?.toFixed(1)} / 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

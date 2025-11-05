import React from "react";
import MovieCard from "../../components/movie-card";
import styles from "./MovieCardList.module.css";

export default function MovieCardList({ movies, genres, onCardClick }) {
  if (!movies || movies.length === 0) {
    return <p className={styles.empty}>No se encontraron películas.</p>;
  }

  return (
    <div className={`${styles.grid} animate__animated animate__bounceInUp`}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          genres={genres}
          onClick={() => onCardClick(movie)}
        />
      ))}
    </div>
  );
}
